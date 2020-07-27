const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function(error, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

async function isTokenValid(token) {
    console.debug('in isTokenValid');
    if (token) {
        console.debug('found token');
        const bearerToken = token.split(" ");
        console.debug(bearerToken[1]);

        const result = new Promise((resolve, reject) => {
            jwt.verify(
                bearerToken[1],
                getKey,
                {
                    audience: process.env.API_IDENTIFIER,
                    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
                    algorithms: ["RS256"]
                },
                (error, decoded) => {
                    if (error) {
                        console.debug(error);
                        resolve({ error });
                    }
                    if (decoded) {
                        console.debug(decoded);
                        resolve({ decoded });
                    }
                }
            );
        });

        return result;
    }

    return { error: "No token provided" };
}

module.exports = isTokenValid;
