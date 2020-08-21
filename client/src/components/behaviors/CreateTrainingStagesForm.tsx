// TODO: implement feedback.

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { useAuth0 } from '@auth0/auth0-react';

import {
    Formik,
    Form as FormikForm,
    FieldArray,
    ArrayHelpers,
    Field,
    FieldInputProps
} from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CreateTrainingStagesMutation from 'relay/mutations/CreateTrainingStagesMutation';
import { RewardFrequency } from 'generated/graphql';

// For types
import type {
    CreateTrainingStagesForm_behavior
} from '__generated__/CreateTrainingStagesForm_behavior.graphql';
import type { IEnvironment } from 'relay-runtime';
import type { CreateTrainingStagesInput } from 'generated/graphql';

interface CreateTrainingStagesFormProps {
    relay_environment: IEnvironment,
    behavior: CreateTrainingStagesForm_behavior,
};

const CreateTrainingStagesForm: React.FC<CreateTrainingStagesFormProps> = (props) => {

    // TODO: decide how to use
    const { user, isAuthenticated } = useAuth0();

    // TODO: decide which are required
    // TODO: finish the validation schema
    const validationSchema = yup.object().shape({
        training_stages: yup.array().of(
            yup.object().shape({
                prompts: yup.array().of(
                    yup.string().oneOf(["incentive", "verbal", "hand"])
                )
                    .required("At least one prompt must be specified for this training stage"),
                reward_frequency: yup.mixed<RewardFrequency>()
                    .oneOf(Object.values(RewardFrequency),
                        "Reward frequency for this training stage must be specified"),
            })
        )
            .required("At least one training stage must be created"),
    });

    // TODO: add styling to the error message
    // TODO: use ErrorMessage instead

    return (
        <Container>
            <h3>Create the training stages for {props.behavior.name}!</h3>
            <Formik
                initialValues={{
                    training_stages: [
                        {
                            prompts: ["incentive"],
                            reward_frequency: "CONTINUOUS",
                        },
                        {
                            prompts: ["incentive", "verbal"],
                            reward_frequency: "CONTINUOUS",
                        },
                        {
                            prompts: ["verbal", "hand"],
                            reward_frequency: "CONTINUOUS",
                        },
                        {
                            prompts: ["verbal", "hand"],
                            reward_frequency: "INTERMITTENT",
                        },
                    ]
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    // TODO: create multiple at once.
                    CreateTrainingStagesMutation.commit(
                        props.relay_environment,
                        {
                            behavior_id: props.behavior.id,
                            training_stages: values.training_stages.map((training_stage, idx) => ({
                                seq: idx,
                                reward_frequency: training_stage.reward_frequency as RewardFrequency,
                                incentive: false,
                                verbal: false,
                                hand: false,
                                ...training_stage.prompts.reduce<{ [index: string]: boolean }>((prompts_obj, cur_key) => {
                                    prompts_obj[cur_key] = true;
                                    return prompts_obj;
                                }, {}),
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
                    dirty,
                    isValid,
                    isSubmitting }) => (
                        <FormikForm>
                            <FieldArray
                                name="training_stages"
                            >
                                {(arrayHelpers: ArrayHelpers) => (
                                    <Container className="p-3 mb-3 border rounded">
                                        {values.training_stages.map((training_stage, index) => (
                                            <Container
                                                key={index}
                                                className="p-3 mb-3 border rounded"
                                            >
                                                <h4>Stage {index + 1}</h4>
                                                <Form.Row>
                                                    <Form.Group controlId={`formTrainingStagesPrompts-${index}`}>
                                                        <Form.Label>
                                                            Which prompt methods will be used in this training stage?
                                                        </Form.Label>
                                                        <Field
                                                            type="checkbox"
                                                            name={`training_stages[${index}].prompts`}
                                                            value="incentive"
                                                        >
                                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label={`${props.behavior.incentive_method}`}
                                                                    {...field}
                                                                />
                                                            )
                                                            }
                                                        </Field>
                                                        <Field
                                                            type="checkbox"
                                                            name={`training_stages[${index}].prompts`}
                                                            value="verbal"
                                                        >
                                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label={
                                                                        props.behavior.verbal_command
                                                                            ? `${props.behavior.verbal_command} verbal command`
                                                                            : "Verbal command"
                                                                    }
                                                                    {...field}
                                                                />
                                                            )
                                                            }
                                                        </Field>
                                                        <Field
                                                            type="checkbox"
                                                            name={`training_stages[${index}].prompts`}
                                                            value="hand"
                                                        >
                                                            {({ field }: { field: FieldInputProps<string> }) => (
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label="Hand signal"
                                                                    {...field}
                                                                />
                                                            )
                                                            }
                                                        </Field>
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            How frequently should successful attempts be rewarded at this stage?
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            name={`training_stages[${index}].reward_frequency`}
                                                            value={values.training_stages[index].reward_frequency}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        >
                                                            {Object.values(RewardFrequency).map(freq => {
                                                                return (
                                                                    <option
                                                                        key={`${freq}-${index}`}
                                                                        value={freq}
                                                                    >
                                                                        {freq}
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
                                                onClick={() => arrayHelpers.push({ prompts: [], reward_frequency: "CONTINUOUS" })}
                                            >
                                                Add a training stage
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
                                        Add all training stages
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

export default createFragmentContainer(CreateTrainingStagesForm, {
    behavior: graphql`
        fragment CreateTrainingStagesForm_behavior on Behavior {
            id
            name
            incentive_method
            verbal_command
        }
    `,
});
