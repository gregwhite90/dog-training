import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import environment from './lib/createRelayEnvironment';

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
        this.state = {
            relay: {
                environment
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
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/dogs">
                                    <Dogs relay={{environment}}/>
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Row>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
