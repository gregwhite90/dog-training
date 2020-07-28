import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import AddDogMutation from '../../relay/mutations/AddDogMutation';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AddDogForm({imgCols, relay: { environment }}) {
    const { user, isAuthenticated } = useAuth0();
    const nameDefaultValue = '';
    const pictureDefaultValue = null;

    // TODO: authorization to get an S3 signed key

    function getSignedRequest(file) {
        return fetch(
            `/sign-s3?file_name=${encodeURIComponent(file.name)}&file_type=${encodeURIComponent(file.type)}`,
            {
                method: 'GET',
            })
            .then(response => {
                if (response.ok) {
                    response = response.json();
                    return uploadFile(file, response.signedRequest, response.url);
                }
                // TODO: error-handling
            });
    }

    function uploadFile(file, signedRequest, url) {
        return fetch(signedRequest, {
            method: 'PUT',
        })
            .then(response => {
                if (response.ok) {
                    document.getElementById('picture-url').value = url;
                }
                // TODO: error-handling code
            });
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: nameDefaultValue,
                    picture: pictureDefaultValue,
                }}
                onSubmit={({name, picture}) => {
                        // TODO: figure out what to do with the file input
                        return AddDogMutation.commit(
                            environment,
                            {name, picture: picture === '' ? null : picture},
                            {id: user.user_id})
                }}
            >
                <Card fluid="md">
                    <FormikForm>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}
                                            md={imgCols}
                                            controlId="formGridPicture">
                                    <Form.File
                                        label="Picture"
                                        accept="image/*"
                                        id="picture-upload"
                                        onchange={() => {
                                                const files = document.getElementById('picture-upload').files;
                                                const file = files[0];
                                                if (file) {
                                                    getSignedRequest(file);
                                                }
                                        }}
                                    />
                                    <Form.Control name="picture" id="picture-url" type="hidden" />
                                </Form.Group>
                                <Form.Group as={Col}
                                            md={12 - imgCols}
                                            controlId="formGridName">
                                    <Form.Control name="name" placeholder="Name" />
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </FormikForm>
                </Card>
            </Formik>
        </div>
    );
}
