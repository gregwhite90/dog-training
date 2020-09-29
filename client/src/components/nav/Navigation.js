import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import LoginButton from '../authentication/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../logo_dark.svg';

import {
    PlusIcon,
    PeopleIcon,
} from '@primer/octicons-react';

// TODO: make the add links actually work
// TODO: create the endpoints /sessions/add and /behaviors/add. Select a dog and redirect
// TODO: use the correct link if already on a dog
// TODO: figure out the pending invitations situation
// TODO: handle if no user.picture?
const Navigation = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    const MARGIN_WITHIN_NAV = 3;

    return (
        <Navbar bg="light" expand="md" className="border-bottom border-primary">
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
                     <Nav>
                         <Dropdown as={NavItem} className={`mr-${MARGIN_WITHIN_NAV}`}>
                             <Dropdown.Toggle as={NavLink}>
                                 <PlusIcon size="small" verticalAlign="middle" />
                             </Dropdown.Toggle>
                             <Dropdown.Menu>
                                 <Dropdown.Item href="/dogs/add">
                                     Dog
                                 </Dropdown.Item>
                                 <Dropdown.Item href="/behaviors/add">
                                     Behavior
                                 </Dropdown.Item>
                                 <Dropdown.Item href="/sessions/add">
                                     Training session
                                 </Dropdown.Item>
                             </Dropdown.Menu>
                         </Dropdown>
                         <Dropdown as={NavItem} className={`mr-${MARGIN_WITHIN_NAV}`}>
                             <Dropdown.Toggle as={NavLink}>
                                 <>
                                     <PeopleIcon size="small" verticalAlign="middle" />
                                     {' '}
                                     <Badge variant="primary">0</Badge>
                                 </>
                             </Dropdown.Toggle>
                             <Dropdown.Menu>
                                 <Dropdown.Item href="/invitations/add">
                                     Send an invitation
                                 </Dropdown.Item>
                                 <Dropdown.Divider />
                                 <Dropdown.Header>
                                     Pending invitations recieved
                                 </Dropdown.Header>
                                 <Dropdown.Item as={Container}>
                                     <Row>Dog: </Row>
                                     <Row>Role: </Row>
                                     <Row>From: </Row>
                                     <Row>To: </Row>
                                     <Row><Button variant="primary">Accept</Button></Row>
                                 </Dropdown.Item>
                             </Dropdown.Menu>
                         </Dropdown>
                         <Dropdown as={NavItem}>
                             <Dropdown.Toggle as={NavLink}>
                                 <Image src={user.picture} alt={user.name} width="32px" roundedCircle />
                             </Dropdown.Toggle>
                             <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => logout()}>
                                     Log out
                                 </Dropdown.Item>
                             </Dropdown.Menu>
                         </Dropdown>
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
