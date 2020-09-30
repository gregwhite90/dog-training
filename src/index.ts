import sslRedirect from 'heroku-ssl-redirect';
import express, { Express, Request } from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { DogTrainingSchema } from './graphql/schema';;
import {
    checkJwt,
    checkScopes,
} from './validate';
import { signS3PutHandler, signS3GetHandler } from './aws';
import { sendInvitation } from './sendgrid';
import { createContext } from './context';

declare global {
    namespace Express {
        interface Request {
            user: {
                sub: string,
            }
        }
    }
}

const app: Express = express();

app.use(sslRedirect());

// Serve the static React files.
app.use(express.static(path.join(__dirname, '../client/build')));

// Set up the API route
app.use('/graphql',
    checkJwt,
    checkScopes(['read:viewer']),
    graphqlHTTP((req: Request, _res, _graphQLParams) => ({
        schema: DogTrainingSchema,
        graphiql: {
            headerEditorEnabled: true,
        },
        context: createContext(req),
    }))
);

app.get('/sign-s3/put', checkJwt, checkScopes(['write:assets']), signS3PutHandler);
app.get('/sign-s3/get', checkJwt, checkScopes(['read:assets']), signS3GetHandler);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(process.env.PORT || 5000);
