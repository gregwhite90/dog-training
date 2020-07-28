import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { withAuth0 } from '@auth0/auth0-react';
import createEnvironment from './lib/createRelayEnvironment';

import Navigation from './react-components/nav/Navigation';
import Home from './react-components/pages/Home';
import About from './react-components/pages/About';
import Dogs from './react-components/pages/Dogs';

/**
import logo from './logo.svg';
*/
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        const { getAccessTokenSilently } = props.auth0;
        this.state = {
            relay: {
                environment: createEnvironment(getAccessTokenSilently),
            },
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation />
                    <Container fluid>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path="/about">
                                        <About />
                                    </Route>
                                    <Route path="/dogs">
                                        <Dogs relay={this.state.relay}/>
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default withAuth0(App);
