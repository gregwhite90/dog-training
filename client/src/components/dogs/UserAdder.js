import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withAuth0 } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            display: false,
            invitee_email: null,
            user_role: "OWNER",
            invited_by: props.auth0.user.sub,
            dog_id: props.dog.id,
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({display: true});
    }

    render() {
        return (
            <Container>
                <h3>Invite other people to collaborate training {this.props.dog.name}!</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="invitationEmail">
                        <Form.Label>
                            Email address to invite:
                        </Form.Label>
                        <Form.Control type="email"
                                      name="invitee_email"
                                      placeholder="Email"
                                      onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Invite user as:
                        </Form.Label>
                        <Form.Group controlId="invitationRole">
                            <Form.Check type="radio"
                                        label="Owner"
                                        value="OWNER"
                                        name="user_role"
                                        onChange={this.handleChange}
                                        selected />
                            <Form.Check type="radio"
                                        label="Trainer"
                                        value="TRAINER"
                                        name="user_role"
                                        onChange={this.handleChange}
                                        disabled />
                            <Form.Check type="radio"
                                        label="Viewer"
                                        value="VIEWER"
                                        name="user_role"
                                        onChange={this.handleChange}
                                        disabled />
                        </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Invite user by email
                    </Button>
                </Form>
                {this.state.display &&
                 (<Container>
                     {JSON.stringify(this.state)}
                 </Container>)
                }
            </Container>
        );
    }
}

export default createFragmentContainer(withAuth0(UserAdder), {
    dog: graphql`
        fragment UserAdder_dog on Dog {
            id
            name
            picture
        }
    `,
});
