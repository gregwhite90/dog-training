import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import LoginButton from '../authentication/LoginButton';
import LogoutButton from '../authentication/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import '../../App.css';

const Navigation = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <Navbar bg="light" expand="md" className="m-3">
            <Navbar.Brand href="/">Dog Training</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated &&
                 (
                     <LinkContainer to="/dogs" exact="true">
                         <Nav.Item>
                             <span>Dogs</span>
                         </Nav.Item>
                     </LinkContainer>
                 )
                }
            </Navbar.Collapse>
            <Nav className="ml-auto">
                <LinkContainer to="/about" exact="true">
                    <Nav.Item>
                        <span>About</span>
                    </Nav.Item>
                </LinkContainer>
                {isAuthenticated
                 ? (
                     <>
                         <Nav.Item>
                             <LogoutButton />
                         </Nav.Item>
                         <Nav.Item>
                             <Image src={user.picture} alt={user.name} width="35px" roundedCircle />
                         </Nav.Item>
                     </>
                 )
                 : (
                     <Nav.Item>
                         <LoginButton />
                     </Nav.Item>
                 )}
            </Nav>
        </Navbar>
    );
}

export default withRouter(Navigation);
