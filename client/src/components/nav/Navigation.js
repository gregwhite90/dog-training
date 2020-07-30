import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import LoginButton from '../authentication/LoginButton';
import LogoutButton from '../authentication/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../logo_dark.svg';

const Navigation = () => {
    const { user, isAuthenticated } = useAuth0();
    const MARGIN_WITHIN_NAV = 3;

    return (
        <Navbar bg="light" expand="md" className="border-bottom border-primary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">
                <img src={logo} height="30" alt="logo" />
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {isAuthenticated &&
                     (
                         <LinkContainer to="/dogs" exact>
                             <Nav.Item className={`mr-${MARGIN_WITHIN_NAV}`}>
                                 <span>Dogs</span>
                             </Nav.Item>
                         </LinkContainer>
                     )
                    }
                    <LinkContainer to="/about" exact>
                        <Nav.Item>
                            <span>About</span>
                        </Nav.Item>
                    </LinkContainer>
                </Nav>

                {isAuthenticated
                 ? (
                     <Nav>
                         <Nav.Item className={`mr-${MARGIN_WITHIN_NAV}`}>
                             <LogoutButton />
                         </Nav.Item>
                         <Nav.Item>
                             <Image src={user.picture} alt={user.name} width="35px" roundedCircle />
                         </Nav.Item>
                     </Nav>
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
