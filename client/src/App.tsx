import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

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
import BehaviorsRouter from 'components/behaviors/BehaviorsRouter';
import TrainingStagesRouter from 'components/training_stages/TrainingStagesRouter';

import './App.scss';

export const history = createBrowserHistory();

// TODO: fix the any Props and State type delcarations and constructor
class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { relay: { environment: null } };
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
            <Router history={history}>
                <div className="App">
                    <Navigation />
                    <Container fluid>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path="/login" render={(_: any) => (
                                        this.props.auth0.loginWithRedirect()
                                    )} />
                                    <Route path="/about" component={About} />
                                    <Route path="/dogs" render={(props: any) => (
                                        <DogsRouter {...props} relay={this.state.relay} viewer={this.props.auth0.user} />
                                    )} />
                                    <Route path="/behaviors" render={(props: any) => (
                                        <BehaviorsRouter {...props} relay={this.state.relay} />
                                    )} />
                                    <Route path="/training_stages" render={(props: any) => (
                                        <TrainingStagesRouter {...props} relay={this.state.relay} />
                                    )} />
                                    <Route path="/" component={Home} />
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default withAuth0(App);
