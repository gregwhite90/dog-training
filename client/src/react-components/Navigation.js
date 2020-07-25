import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import LoginButton from './authentication/LoginButton';
import LogoutButton from './authentication/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';

const Navigation = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Dog Training</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated && (
                     <Nav className="mr-auto">
                         <Nav.Item>
                             <Nav.Link href="/dogs">My Dogs</Nav.Link>
                         </Nav.Item>
                     </Nav>
                )}
                <Nav className="justify-content-end">
                    {isAuthenticated
                     ? (
                         <>
                             <Nav.Item>
                                 <LogoutButton />
                             </Nav.Item>
                             <Nav.Item>
                                 <Image src={user.picture} alt={user.name} roundedCircle fluid />
                             </Nav.Item>
                         </>
                     )
                     : (
                         <Nav.Item>
                             <LoginButton />
                         </Nav.Item>
                     )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
