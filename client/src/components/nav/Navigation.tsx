import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { useAuth0 } from '@auth0/auth0-react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AuthenticatedNav from './AuthenticatedNav';

import LoginButton from '../authentication/LoginButton';

import logo from '../../logo_dark.svg';

import type { RelayProp } from 'react-relay';
import type { RouteComponentProps } from 'react-router-dom';

interface NavigationProps extends RouteComponentProps<{}> {
    relay: RelayProp;
};

// TODO: decide if need to pass anything to AuthenticatedNav
const Navigation: React.FC<NavigationProps> = ({ relay }) => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar
            bg="light"
            expand="md"
            className="border-bottom border-primary"
            sticky="top"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">
                <img src={logo} height="30" alt="logo" />
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/about" exact>
                        <Nav.Item>
                            <span>About</span>
                        </Nav.Item>
                    </LinkContainer>
                </Nav>

                {isAuthenticated
                    ? (
                        <AuthenticatedNav relay={relay} />
                    )
                    : (
                        <Nav>
                            <Nav.Item>
                                <LoginButton />
                            </Nav.Item>
                        </Nav>
                    )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Navigation);
