import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withAuth0 } from '@auth0/auth0-react';

import { Formik, ErrorMessage, Field, Form as FormikForm } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import InviteUserByEmailMutation from 'relay/mutations/InviteUserByEmailMutation';

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

// TODO: can make this a function component

class UserAdder extends React.Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            invitee_email: null,
            user_role: "OWNER",
            invited_by: props.auth0.user.sub,
            dog_id: props.dog.id,
        };
        this.state = this.defaultState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        InviteUserByEmailMutation.commit(
            this.props.relay.environment,
            {
                invitee_email: this.state.invitee_email,
                dog_id: this.state.dog_id,
                user_role: this.state.user_role,
            }
        );
        this.setState(this.defaultState);
    }

    render() {
        // TODO: programmatically fill in the values for the enum

        const validationSchema = yup.object().shape({
            invitee_email: yup.string()
                              .email("Must be a valid email address")
                              .required("Email address to invite to collaborate is required"),
            user_role: yup.string()
                          .matches(/(OWNER|TRAINER|VIEWER)/, "Role of user is not valid")
                          .required("Role of invited user is required"),
        });

        // TODO: add styling to the error message
        // TODO: use ErrorMessage instead

        return (
            <Container>
                <h3>Invite other people to collaborate training {this.props.dog.name}!</h3>
                <Formik
                    initialValues={{
                        invitee_email: "",
                        user_role: "OWNER",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            InviteUserByEmailMutation.commit(
                                this.props.relay.environment,
                                {
                                    invitee_email: values.invitee_email,
                                    dog_id: this.props.dog_id,
                                    user_role: values.user_role,
                                },
                                () => {
                                    resetForm();
                                    setSubmitting(false);
                                }
                            );
                    }}
                >
                    {( { isSubmitting } ) => (
                            <FormikForm>
                                <Form.Group controlId="formInvitationEmail">
                                    <Form.Label>
                                        Email address to invite:
                                    </Form.Label>
                                    <Field type="email"
                                           name="invitee_email"
                                           placeholder="Email"
                                    />
                                    <ErrorMessage name="invitee_email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Invite user as:
                                    </Form.Label>
                                    <Field as="select" name="user_role">
                                        <option value="OWNER">Owner</option>
                                        <option value="TRAINER" disabled>Trainer</option>
                                        <option value="VIEWER" disabled>Viewer</option>
                                    </Field>
                                    <ErrorMessage name="user_role" />
                                </Form.Group>
                                <Button variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}>
                                    Invite user by email
                                </Button>
                            </FormikForm>
                        )}
                </Formik>
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
