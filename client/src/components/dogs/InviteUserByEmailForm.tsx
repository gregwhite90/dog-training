import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';

import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import InviteUserByEmailMutation from 'relay/mutations/InviteUserByEmailMutation';

// For types
import type { InviteUserByEmailForm_dog } from '__generated__/InviteUserByEmailForm_dog.graphql';
import type { IEnvironment } from 'relay-runtime';
import { UserDogRole } from 'generated/graphql';
import type { InviteUserByEmailInput } from 'generated/graphql';
import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';
// TODO: use RelayProp from react-relay?

interface InviteUserByEmailFormProps extends HeaderLevelProps {
    relay_environment: IEnvironment,
    dog: InviteUserByEmailForm_dog,
};

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

const InviteUserByEmailForm: React.FC<InviteUserByEmailFormProps> = ({
    relay_environment,
    dog,
    headerLevel = 1,
}) => {

    const { user } = useAuth0();

    // TODO: programmatically fill in the values for the enum

    const validationSchema = yup.object<InviteUserByEmailInput>().shape({
        invitee_email: yup.string()
            .email("Must be a valid email address")
            .required("Email address to invite to collaborate is required"),
        user_role: yup.mixed<UserDogRole>()
            .oneOf(Object.values(UserDogRole), "Role of user is not valid")
            .required("Role of invited user is required"),
    });

    // TODO: add styling to the error message
    // TODO: use ErrorMessage instead

    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;

    return (
        <Container>
            <HeaderLevel>Invite other people to collaborate training {dog.name}!</HeaderLevel>
            <Formik
                initialValues={{
                    invitee_email: "",
                    user_role: "OWNER",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    InviteUserByEmailMutation.commit(
                        relay_environment,
                        {
                            invitee_email: values.invitee_email,
                            dog_id: dog.id,
                            invited_by: user.sub,
                            user_role: values.user_role as UserDogRole,
                        },
                        () => {
                            resetForm();
                            setSubmitting(false);
                        }
                    );
                }}
            >
                {({ values,
                    handleBlur,
                    handleChange,
                    errors,
                    touched,
                    dirty,
                    isValid,
                    isSubmitting }) => (
                        <FormikForm>
                            <Form.Row>
                                <Form.Group controlId="formInvitationEmail">
                                    <Form.Label>
                                        Email address to invite:
                                </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="invitee_email"
                                        placeholder="Email"
                                        value={values.invitee_email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.invitee_email && !!errors.invitee_email}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.invitee_email}</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>
                                        Invite user as:
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="user_role"
                                        value={values.user_role}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={!!errors.user_role}
                                    >
                                        {Object.values(UserDogRole).map(role => {
                                            return (
                                                <option
                                                    key={`${role}`}
                                                    value={role}
                                                >
                                                    {role}
                                                </option>
                                            );
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.user_role}</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={!dirty || isSubmitting || !isValid}
                                >
                                    Invite user by email
                                </Button>
                            </Form.Row>
                        </FormikForm>
                    )}
            </Formik>
        </Container>
    );
}

export default createFragmentContainer(InviteUserByEmailForm, {
    dog: graphql`
        fragment InviteUserByEmailForm_dog on Dog {
            id
            name
            picture
        }
    `,
});
