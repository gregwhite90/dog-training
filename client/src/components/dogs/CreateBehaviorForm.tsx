import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';

import { Formik, Form as FormikForm, FormikProps, FormikHelpers } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CreateBehaviorMutation from 'relay/mutations/CreateBehaviorMutation';

// For types
import type { CreateBehaviorForm_dog } from '__generated__/CreateBehaviorForm_dog.graphql';
import type { IEnvironment } from 'relay-runtime';
import type { CreateBehaviorInput } from 'generated/graphql';

interface CreateBehaviorFormProps {
    relay_environment: IEnvironment,
    dog: CreateBehaviorForm_dog,
};

const CreateBehaviorForm: React.FC<CreateBehaviorFormProps> = (props) => {

    console.log(`In CreateBehaviorForm`);
    console.log(props);

    // TODO: decide how to use
    const { user, isAuthenticated } = useAuth0();

    // TODO: decide which are required
    // TODO: only allow one of shape vs. lure?

    const nullable_string = () => yup.string()
        .nullable()
        .transform((value, originalValue) => {
            return value ? originalValue : null;
        });

    const validationSchema = yup.object<CreateBehaviorInput>().shape({
        dog_id: yup.string()
            .required("A dog ID is required"),
        name: yup.string()
            .required("A name for this desired behavior is required"),
        explanation: nullable_string(),
        lure_description: nullable_string(),
        shape_description: nullable_string(),
        verbal_command: nullable_string(),
        hand_signal: nullable_string(),
        has_duration: yup.bool()
            .required("Whether this behavior has a duration is required"),
        release_command: nullable_string(),
    });

    // TODO: add styling to the error message
    // TODO: use ErrorMessage instead

    return (
        <Container>
            <h3>Create a desired behavior for {props.dog.name}!</h3>
            <Formik
                initialValues={{
                    dog_id: props.dog.id,
                    name: "",
                    explanation: "",
                    lure_description: "",
                    shape_description: "",
                    verbal_command: "",
                    hand_signal: "",
                    has_duration: false,
                    release_command: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    CreateBehaviorMutation.commit(
                        props.relay_environment,
                        {
                            dog_id: props.dog.id,
                            ...validationSchema.cast(values),
                        } as CreateBehaviorInput,
                        () => {
                            resetForm();
                            setSubmitting(false);
                        }
                    );
                }}
            >
                {({ values,
                    setFieldValue,
                    handleBlur,
                    handleChange,
                    errors,
                    touched,
                    dirty,
                    isValid,
                    isSubmitting }) => (
                        <FormikForm>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorName">
                                    <Form.Label>
                                        Name of the desired behavior:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Behavior name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.name && !!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorExplanation">
                                    <Form.Label>
                                        Explanation of the behavior (the more detailed the better!):
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="explanation"
                                        placeholder="Behavior explanation"
                                        value={values.explanation}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.explanation && !!errors.explanation}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.explanation}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorLureDescription">
                                    <Form.Label>
                                        Description of the lure to be used in training (physical incentive for your dog to perform the behavior):
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="lure_description"
                                        placeholder="Lure description"
                                        value={values.lure_description}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.lure_description && !!errors.lure_description}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lure_description}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorShapeDescription">
                                    <Form.Label>
                                        Description of the shaping to be used in training (non-physical encouragement for successively closer steps like a game of hot-cold, primarily for when physical lure is impractical):
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="shape_description"
                                        placeholder="Shape description"
                                        value={values.shape_description}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.shape_description && !!errors.shape_description}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.shape_description}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorVerbalCommand">
                                    <Form.Label>
                                        Verbal command to cue the behavior:
                                </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="verbal_command"
                                        placeholder="Verbal command"
                                        value={values.verbal_command}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.verbal_command && !!errors.verbal_command}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.verbal_command}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorHandSignal">
                                    <Form.Label>
                                        Description of the hand signal to cue the behavior:
                                </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="hand_signal"
                                        placeholder="Hand signal description"
                                        value={values.hand_signal}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.hand_signal && !!errors.hand_signal}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.hand_signal}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorHasDuration">
                                    <Form.Check
                                        type="switch"
                                        name="has_duration"
                                        label="Behavior requires dog to maintain behavior for some period of time"
                                        onChange={() => setFieldValue("has_duration", !values.has_duration)}
                                        onBlur={handleBlur}
                                        checked={values.has_duration}
                                        id="formBehaviorHasDurationSwitch"
                                        feedback={errors.has_duration}
                                    />
                                </Form.Group>
                            </Form.Row>
                            {values.has_duration && (
                                <Form.Row>
                                    <Form.Group controlId="formBehaviorReleaseCommand">
                                        <Form.Label>
                                            Verbal command to release the behavior:
                                     </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="release_command"
                                            placeholder="Release command"
                                            value={values.release_command}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isInvalid={touched.release_command && !!errors.release_command}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.release_command}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                            )}
                            <Form.Row>
                                <Button variant="primary"
                                    type="submit"
                                    disabled={!dirty || isSubmitting || !isValid}>
                                    Add desired behavior
                                </Button>
                            </Form.Row>
                        </FormikForm>
                    )}
            </Formik>
        </Container>
    );
}

export default createFragmentContainer(CreateBehaviorForm, {
    dog: graphql`
        fragment CreateBehaviorForm_dog on Dog {
            id
            name
        }
    `,
});
