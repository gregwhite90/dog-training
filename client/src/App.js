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

import Navigation from 'components/nav/Navigation';
import Home from 'components/pages/Home';
import About from 'components/pages/About';

import DogsRouter from 'components/dogs/DogsRouter';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { relay: { environment: null }};
    }

    componentDidMount() {
        const { getAccessTokenSilently } = this.props.auth0;
        this.setState({
            relay: {
                environment: createEnvironment(getAccessTokenSilently)
            }
        });
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
                                    <Route path="/about" component={About} />
                                    <Route path="/dogs" render={(props) => (
                                        <DogsRouter {...props} relay={this.state.relay} viewer={this.props.auth0.user}/>
                                    )} />
                                    <Route path="/" component={Home} />
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
