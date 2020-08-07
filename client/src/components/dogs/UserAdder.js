import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import LoadingButton from '../utils/LoadingButton';

// User experience:
// Enter an email
// Hit Auth0 API to search users by email
// - display verified profiles first
// - display other profiles after?
// If no profiles, prompt invite email
// Always a button to redo the search
// Invite as: role selection radio buttons (with description of permissions)

// Also need:
// - UX: figure out where in the app flow this page goes
// - Backend: set up the API -> persistence layer

// TODO: generate roles programmatically from schema
// TODO: Add descriptions of the roles
// TODO: show list of user's dogs, allow them to select which dogs and a role for each dog?
// TODO: use a form?
// TODO: where to redirect to?
// TODO: add pending invitations field to the user object, that does a lookup by email
// TODO: add an invite by email mutation
// TODO: add a confirm invitation mutation

class UserAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
        };
    }

    render() {
        return (
            <Container>
                <h3>Invite other people to collaborate training {this.props.dog.name}!</h3>
                <Container>
                    <Row>
                        <label for="invitee_email">Email address</label>
                        <input id="invitee_email"
                               name="invitee_email"
                               type="email"
                               placeholder="Email"/>
                    </Row>
                    <Row>
                        <label for="user_role">Invite user as:</label>
                        <ToggleButtonGroup type="radio"
                                           name="user_role"
                                           id="user_role"
                                           defaultValue="OWNER">
                            <ToggleButton value="OWNER">Owner</ToggleButton>
                            <ToggleButton value="TRAINER" disabled>Trainer</ToggleButton>
                            <ToggleButton value="VIEWER" disabled>Viewer</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <Row>
                        <LoadingButton text="Invite user by email"
                                       load={() => {
                                               // todo: fetch network request
                                               return new Promise((resolve, reject) => {
                                                   resolve(
                                                       this.setState({
                                                           results: {
                                                               invitee_email: document.getElementById("invitee_email").value,
                                                               user_role: document.getElementById("user_role").value,
                                                               invited_by: this.props.auth0.user,
                                                               dog_id: this.props.dog.id,
                                                           }
                                                       })
                                                   );
                                               });
                                       }}
                        />
                    </Row>
                </Container>
                {this.state.results &&
                 (<Container>
                     {JSON.stringify(this.state.results)}
                 </Container>)
                }
            </Container>
        );
    }
}

export default withAuth0(UserAdder);
