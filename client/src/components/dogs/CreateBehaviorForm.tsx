import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';

import { Formik, Form as FormikForm, FormikProps, FormikHelpers } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { nullable_string } from 'components/utils/FormValidationUtils';

import CreateBehaviorMutation from 'relay/mutations/CreateBehaviorMutation';
import { IncentiveMethod } from 'generated/graphql';

// For types
import type { CreateBehaviorForm_dog } from '__generated__/CreateBehaviorForm_dog.graphql';
import type { IEnvironment } from 'relay-runtime';
import type { CreateBehaviorInput } from 'generated/graphql';
import type { HeaderLevelProps } from 'components/utils/HeaderLevels';

interface CreateBehaviorFormProps extends HeaderLevelProps {
    relay_environment: IEnvironment,
    dog: CreateBehaviorForm_dog,
};

const CreateBehaviorForm: React.FC<CreateBehaviorFormProps> = ({
    relay_environment,
    dog,
    headerLevel = "h1",
}) => {

    const HeaderLevel = headerLevel;

    // TODO: decide how to use
    const { user, isAuthenticated } = useAuth0();

    // TODO: decide which are required
    // TODO: only allow one of shape vs. lure?

    const validationSchema = yup.object<CreateBehaviorInput>().shape({
        dog_id: yup.string()
            .required("A dog ID is required"),
        name: yup.string()
            .required("A name for this desired behavior is required"),
        explanation: nullable_string(),
        incentive_method: yup.mixed<IncentiveMethod>()
            .oneOf(Object.values(IncentiveMethod),
                "Incentive method must be one of valid options"),
        incentive_description: nullable_string(),
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
            <HeaderLevel>Create a desired behavior for {dog.name}!</HeaderLevel>
            <Formik
                initialValues={{
                    dog_id: dog.id,
                    name: "",
                    explanation: "",
                    incentive_method: "LURE",
                    incentive_description: "",
                    verbal_command: "",
                    hand_signal: "",
                    has_duration: false,
                    release_command: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    CreateBehaviorMutation.commit(
                        relay_environment,
                        {
                            dog_id: dog.id,
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
                                <Form.Group>
                                    <Form.Label>
                                        Method used to incentivize behavior without command or hand signal:
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="incentive_method"
                                        value={values.incentive_method}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={!!errors.incentive_method}
                                    >
                                        {Object.values(IncentiveMethod).map(method => {
                                            return (
                                                <option
                                                    key={method}
                                                    value={method}
                                                >
                                                    {method}
                                                </option>
                                            );
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{errors.incentive_method}</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="formBehaviorIncentiveDescription">
                                    <Form.Label>
                                        Description of the {values.incentive_method} to be used in training (physical incentive for your dog to perform the behavior):
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="incentive_description"
                                        placeholder={`${values.incentive_method} description`}
                                        value={values.incentive_description}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isInvalid={touched.incentive_description && !!errors.incentive_description}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.incentive_description}
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
