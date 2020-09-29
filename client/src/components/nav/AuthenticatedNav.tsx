import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

import {
    PlusIcon,
} from '@primer/octicons-react';

import PendingInvitationsDropdown from './PendingInvitationsDropdown';

import type { RelayProp } from 'react-relay';

interface AuthenticatedNavProps {
    relay: RelayProp;
};

// TODO: make the add links actually work
// TODO: create the endpoint /sessions/add to mirror /behaviors/add. Select a dog and redirect
// TODO: use the correct link if already on a dog
// TODO: figure out the pending invitations situation
// TODO: handle if no user.picture?
const AuthenticatedNav: React.FC<AuthenticatedNavProps> = ({ relay }) => {
    const { user, logout } = useAuth0();
    const MARGIN_WITHIN_NAV = 3;

    return (
        <Nav>
            <PendingInvitationsDropdown
                relay={relay}
                margin_within_nav={MARGIN_WITHIN_NAV}
            />
            <Dropdown
                alignRight={true}
                as={NavItem}
                className={`mr-${MARGIN_WITHIN_NAV}`}
            >
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
            <Dropdown
                alignRight={true}
                as={NavItem}
            >
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
    );
}

export default AuthenticatedNav;
