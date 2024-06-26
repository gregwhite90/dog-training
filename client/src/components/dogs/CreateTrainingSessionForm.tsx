import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';

import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { nullable_number } from 'components/utils/FormValidationUtils';

import CreateTrainingSessionMutation from 'relay/mutations/CreateTrainingSessionMutation';

// For types
import type { CreateTrainingSessionForm_dog } from '__generated__/CreateTrainingSessionForm_dog.graphql';
import type { IEnvironment } from 'relay-runtime';
import type { CreateTrainingSessionInput } from 'generated/graphql';

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface CreateTrainingSessionFormProps extends HeaderLevelProps {
    relay_environment: IEnvironment,
    dog: CreateTrainingSessionForm_dog,
};

const CreateTrainingSessionForm: React.FC<CreateTrainingSessionFormProps> = ({
    relay_environment,
    dog,
    headerLevel = 1,
}) => {

    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;

    // TODO: decide how to use
    const { user, isAuthenticated } = useAuth0();

    // TODO: decide which are required
    // TODO: only allow one of shape vs. lure?

    const validationSchema = yup.object<CreateTrainingSessionInput>().shape({
        start_timestamp: yup.string()
            .transform((value, originalValue) => {
                if (yup.string().isType(value) && value !== null && value !== undefined) {
                    const date = new Date(value);
                    return date.toISOString();
                } else {
                    return null;
                }
            })
            .required("The start time for this training session is required (an approximation is okay!)"),
        minutes_long: nullable_number(
            yup.number()
                .nullable(true)
                .integer("Must be a whole number of minutes long")
                .positive("Must be a positive number of minutes long"),
            "Duration must be a number, or left empty"
        ),
    });

    // TODO: add styling to the error message
    // TODO: use ErrorMessage instead

    return (
        <Container>
            <HeaderLevel>Create a training session for {dog.name}!</HeaderLevel>
            <Formik
                initialValues={{
                    start_timestamp: "",
                    minutes_long: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    CreateTrainingSessionMutation.commit(
                        relay_environment,
                        {
                            dog_id: dog.id,
                            user_id: user.sub,
                            ...validationSchema.cast(values),
                        } as CreateTrainingSessionInput,
                        () => {
                            // TODO: redirect to log progress?
                            resetForm();
                            setSubmitting(false);
                        }
                    );
                }}
            >
                {({ values,
                    handleBlur,
                    handleChange,
                    dirty,
                    errors,
                    touched,
                    isValid,
                    isSubmitting }) => (
                        <FormikForm>
                            <Form.Row>
                                <Form.Group controlId="formTrainingSessionStartTimestamp">
                                    <Form.Label>
                                        Date and time the training session started:
                                    </Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="start_timestamp"
                                        value={values.start_timestamp}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.start_timestamp && !!errors.start_timestamp}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.start_timestamp}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formTrainingSessionMinutesLong">
                                    <Form.Label>
                                        Duration of the training session:
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="number"
                                            name="minutes_long"
                                            value={values.minutes_long}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isInvalid={touched.minutes_long && !!errors.minutes_long}
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text>minutes</InputGroup.Text>
                                        </InputGroup.Append>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.minutes_long}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary"
                                    type="submit"
                                    disabled={!dirty || isSubmitting || !isValid}>
                                    Add training session
                                </Button>
                            </Form.Row>
                        </FormikForm>
                    )}
            </Formik>
        </Container >
    );
}

export default createFragmentContainer(CreateTrainingSessionForm, {
    dog: graphql`
        fragment CreateTrainingSessionForm_dog on Dog {
            id
            name
        }
    `,
});
