// TODO: implement feedback.

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

import {
    Formik,
    Form as FormikForm,
    FieldArray,
    ArrayHelpers,
    Field,
    FieldInputProps,
    getIn,
    FormikErrors,
} from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import {
    nullable_number,
    nullable_enum,
} from 'components/utils/FormValidationUtils';

import CreateTrainingProgressesMutation from 'relay/mutations/CreateTrainingProgressesMutation';
import { QualitativeLevel } from 'generated/graphql';

// For types
import type {
    CreateTrainingProgressesForm_trainingSession
} from '__generated__/CreateTrainingProgressesForm_trainingSession.graphql';
import type { IEnvironment } from 'relay-runtime';

interface CreateTrainingProgressesFormProps {
    relay_environment: IEnvironment,
    trainingSession: CreateTrainingProgressesForm_trainingSession,
};

interface CreateTrainingProgressesFormValues {
    training_progresses: Array<{
        training_stage_id: string,
        successes: number,
        attempts: number,
        distance: QualitativeLevel | null,
        distractions: QualitativeLevel | null,
        duration: QualitativeLevel | null,
    }>,
}

const CreateTrainingProgressesForm: React.FC<CreateTrainingProgressesFormProps> = (props) => {

    // TODO: decide how to use
    const { user, isAuthenticated } = useAuth0();

    // TODO: confirm redirect link
    if (props.trainingSession.trainingStages
        && props.trainingSession.trainingStages.edges
        && props.trainingSession.trainingStages.edges.length > 0) {
        return <Redirect to={`/sessions/${props.trainingSession.id}`} />;
    }

    // TODO: decide which are required
    // TODO: finish the validation schema

    // TODO: HOW TO SELECT TRAINING STAGE?
    // TODO: ERRORS
    // TODO: NULLABLE FIELDS
    // TODO: NULLABLE SELECT
    // TODO: CONDITIONAL RENDERING OF DURATION
    const validationSchema = yup.object().shape({
        training_progresses: yup.array().of(
            yup.object().shape({
                training_stage_id: yup.string().required(),
                successes: nullable_number(
                    yup.number()
                        .nullable(true)
                        .integer("Must be a whole number of successes")
                        .positive("Must be a positive number of successes"),
                    "Successes must be a number, or left empty"
                ),
                attempts: nullable_number(
                    yup.number()
                        .nullable(true)
                        .integer("Must be a whole number of attempts")
                        .positive("Must be a positive number of attempts"),
                    "Attempts must be a number, or left empty"
                ),
                distance: nullable_enum(QualitativeLevel),
                distractions: nullable_enum(QualitativeLevel),
                duration: nullable_enum(QualitativeLevel),
            })
        )
            .required("You must log at least one stage of a behavior you trained during this session"),
    });

    // TODO: add styling to the error message
    // TODO: use ErrorMessage instead
    // TODO: bring in the training session identifier to cutomize header?

    const defaultTrainingProgressValues = {
        training_stage_id: "",
        successes: "",
        attempts: "",
        distractions: "",
        distance: "",
        duration: "",
    }

    return (
        <Container>
            <h3>Log the progress you made in this training session!</h3>
            <Formik
                initialValues={{
                    training_progresses: [
                        defaultTrainingProgressValues,
                    ]
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    // TODO: create multiple at once.
                    const cast_values = validationSchema.cast(values);
                    CreateTrainingProgressesMutation.commit(
                        props.relay_environment,
                        {
                            training_session_id: props.trainingSession.id,
                            training_progresses: cast_values!.training_progresses.map((training_progress, idx) => ({
                                seq: idx,
                                training_stage_id: training_progress!.training_stage_id,
                                successes: training_progress!.successes,
                                attempts: training_progress!.attempts,
                                distractions: training_progress!.distractions as QualitativeLevel | null,
                                distance: training_progress!.distance as QualitativeLevel | null,
                                duration: training_progress!.duration as QualitativeLevel | null,
                            })),
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
                    isValid,
                    errors,
                    isSubmitting }) => (
                        <FormikForm>
                            <FieldArray
                                name="training_progresses"
                            >
                                {(arrayHelpers: ArrayHelpers) => (
                                    <Container className="p-3 mb-3 border rounded">
                                        {values.training_progresses.map((training_progress, index) => (
                                            <Container
                                                key={index}
                                                className="p-3 mb-3 border rounded"
                                            >
                                                <h4>Stage trained number {index + 1}</h4>
                                                <Form.Row>
                                                    <Form.Group
                                                        controlId={`formTrainingProgressesTrainingStage-${index}`}
                                                    >
                                                        <Form.Label>
                                                            Which training stage does this progress refer to?
                                                        </Form.Label>
                                                        <Field
                                                            name={`training_progresses[${index}].training_stage_id`}
                                                        />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Col>
                                                        <Form.Group controlId={`formTrainingProgressesSuccesses-${index}`}>
                                                            <InputGroup>
                                                                <Form.Control
                                                                    type="number"
                                                                    name={`training_progresses[${index}].successes`}
                                                                    value={values.training_progresses[index].successes}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <InputGroup.Append>
                                                                    <InputGroup.Text>successes</InputGroup.Text>
                                                                </InputGroup.Append>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group controlId={`formTrainingProgressesAttempts-${index}`}>
                                                            <InputGroup>
                                                                <Form.Control
                                                                    type="number"
                                                                    name={`training_progresses[${index}].attempts`}
                                                                    value={values.training_progresses[index].attempts}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <InputGroup.Append>
                                                                    <InputGroup.Text>attempts</InputGroup.Text>
                                                                </InputGroup.Append>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Distance
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            name={`training_progresses[${index}].distance`}
                                                            value={values.training_progresses[index].distance}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value=""></option>
                                                            {Object.values(QualitativeLevel).map(level => {
                                                                return (
                                                                    <option
                                                                        key={`distance-${level}-${index}`}
                                                                        value={level}
                                                                    >
                                                                        {level}
                                                                    </option>
                                                                );
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Distractions
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            name={`training_progresses[${index}].distractions`}
                                                            value={values.training_progresses[index].distractions}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value=""></option>
                                                            {Object.values(QualitativeLevel).map(level => {
                                                                return (
                                                                    <option
                                                                        key={`distractions-${level}-${index}`}
                                                                        value={level}
                                                                    >
                                                                        {level}
                                                                    </option>
                                                                );
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Duration
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            name={`training_progresses[${index}].duration`}
                                                            value={values.training_progresses[index].duration}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            <option value=""></option>
                                                            {Object.values(QualitativeLevel).map(level => {
                                                                return (
                                                                    <option
                                                                        key={`duration-${level}-${index}`}
                                                                        value={level}
                                                                    >
                                                                        {level}
                                                                    </option>
                                                                );
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => arrayHelpers.remove(index)}
                                                    >
                                                        Remove this training stage
                                                    </Button>
                                                </Form.Row>
                                            </Container>
                                        ))}
                                        <Form.Row>
                                            <Button
                                                variant="primary"
                                                onClick={() => arrayHelpers.push(defaultTrainingProgressValues)}
                                            >
                                                Log another progress
                                            </Button>
                                        </Form.Row>
                                    </Container>
                                )
                                }
                            </FieldArray>
                            <Container>
                                <Form.Row>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={isSubmitting || !isValid}>
                                        Add all training progress
                                    </Button>
                                </Form.Row>
                            </Container>
                        </FormikForm>
                    )
                }
            </Formik>
        </Container >
    );
}


// TODO: GET ALL THE INFO ABOUT DOG AND BEHAVIORS TO SELECT A TRAINING STAGE
export default createFragmentContainer(CreateTrainingProgressesForm, {
    trainingSession: graphql`
        fragment CreateTrainingProgressesForm_trainingSession on TrainingSession {
            id
            trainingStages(
                first: 1
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `,
});
