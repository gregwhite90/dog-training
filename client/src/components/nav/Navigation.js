import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import LoginButton from '../authentication/LoginButton';
import LogoutButton from '../authentication/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../logo_dark.svg';

import {
    PlusIcon,
    BellIcon,
} from '@primer/octicons-react';

// TODO: make the add links actually work
// TODO: create the endpoints /sessions/add and /behaviors/add. Select a dog and redirect
// TODO: use the correct link if already on a dog
// TODO: figure out the pending invitations situation
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
                                     <BellIcon size="small" verticalAlign="middle" />
                                     {' '}
                                     <Badge variant="primary">0</Badge>
                                 </>
                             </Dropdown.Toggle>
                             <Dropdown.Menu>
                                 <Dropdown.Header>
                                     Pending invitations
                                 </Dropdown.Header>
                                 <Dropdown.Item>
                                     Pending invitation 1
                                 </Dropdown.Item>
                                 <Dropdown.Item>
                                     Pending invitation 2
                                 </Dropdown.Item>
                             </Dropdown.Menu>
                         </Dropdown>
                         <Nav.Item className={`mr-${MARGIN_WITHIN_NAV}`}>
                             <LogoutButton />
                         </Nav.Item>
                         <Nav.Item>
                             <Image src={user.picture} alt={user.name} width="32px" roundedCircle />
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
