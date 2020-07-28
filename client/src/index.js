import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    (<React.StrictMode>
        <Auth0Provider domain="dev-uw0xrn72.us.auth0.com"
                       clientId="Uam7i5qRurIvqSgO71fpqH3DoG56z4hz"
                       redirectUri={window.location.origin}
                       audience="https://dog-training-staging.herokuapp.com/graphql"
                       scope="read:viewer"
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
