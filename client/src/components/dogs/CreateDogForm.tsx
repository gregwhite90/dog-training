import React from 'react';

import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CreateDogMutation from 'relay/mutations/CreateDogMutation';

import type { CreateDogInput } from 'generated/graphql';

interface CreateDogFormProps {
    saveCreation: (values: CreateDogInput, onCommitted: () => void) => void
};

const CreateDogForm: React.FC<CreateDogFormProps> = (props) => {
    const validationSchema = yup.object<CreateDogInput>().shape({
        name: yup.string()
                 .required("A name for this dog is required"),
    });

    return (
        <Container>
            <Formik
                initialValues={{
                    name: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        props.saveCreation(
                            values,
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
                    isValid,
                    isSubmitting }) => (
                        <FormikForm>
                            <Form.Row>
                                <Form.Group controlId="formDogName">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Dog's name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={touched.name && !!errors.name}
                                    />
                                    <Form.Control.Feedback type="valid">
                                        Looks good!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary"
                                        type="submit"
                                        disabled={isSubmitting}>
                                    Submit name and upload an image!
                                </Button>
                            </Form.Row>
                        </FormikForm>
                    )}
            </Formik>
        </Container>
    );
}

export default CreateDogForm;
