/**
 * From: https://auth0.com/docs/quickstart/backend/nodejs#validate-access-tokens
*/
import jwt from 'express-jwt';;
import jwtAuthz from 'express-jwt-authz';
import jwksRsa from 'jwks-rsa';

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: process.env.API_IDENTIFIER,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

const checkScopes = (scopes) => jwtAuthz(scopes);

export {
    checkJwt,
    checkScopes,
};
