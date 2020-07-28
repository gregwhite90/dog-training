import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import AddDogMutation from '../../relay/mutations/AddDogMutation';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddDogForm extends React.Component {

    constructor({imgCols, relay: { environment }}) {
        super({imgCols, relay: { environment }});
        this.state = {
            isUploading: false,
        };
    }

    // TODO: authorization to get an S3 signed key

    getSignedRequest(file) {
        return fetch(
            `/sign-s3?file_name=${encodeURIComponent(file.name)}&file_type=${encodeURIComponent(file.type)}`,
            {
                method: 'GET',
            })
            .then(response => {
                if (response.ok) {
                    response = response.json();
                    return this.uploadFile(file, response.signedRequest, response.url);
                }
                // TODO: error-handling
            });
    }

    uploadFile(file, signedRequest, url) {
        return fetch(signedRequest, {
            method: 'PUT',
        })
            .then(response => {
                if (response.ok) {
                    return url;
                }
                // TODO: error-handling code
            });
    }

    render() {
        const nameDefaultValue = '';
        const pictureDefaultValue = '';
        var imgCols = this.props.imgCols || 3; // TODO: fix to be consistent styling
        return (
            <Formik
                initialValues={{
                    name: nameDefaultValue,
                    picture: pictureDefaultValue,
                }}
                onSubmit={({ name, picture }, { setSubmitting }) => {
                        // TODO: figure out what to do with the file input
                        return AddDogMutation.commit(
                            this.props.environment,
                            {name, picture: picture === '' ? null : picture},
                            {id: this.props.auth0.user.user_id}).then(_ => setSubmitting(false));
                }}
                onChange={(e, { setValues }) => {
                        if (e.target.id !== 'picture-upload' || !(e.target.files && e.target.files.length === 1)) {
                            return;
                        }
                        console.log('in pic upload change handler');
                        this.setState({isUploading: true});
                        this.getSignedRequest(e.target.files[0]).then(url => {
                            setValues({picture: url});
                            this.setState({isUploading: false});
                        });
                }}
            >
                {({ isSubmitting }) => {
                     return (
                         <Card fluid="md">
                             <FormikForm>
                                 <Form.Row>
                                     <Form.Group as={Col}
                                                 className={`md-${imgCols}`}
                                                 controlId="formGridPicture">
                                         <Form.File
                                             label="Picture"
                                             accept="image/*"
                                             id="picture-upload"
                                             onchange={() => {
                                                     console.log('in pic upload change handler');
                                                     const files = document.getElementById('picture-upload').files;
                                                     const file = files[0];
                                                     if (file) {
                                                         this.getSignedRequest(file);
                                                     }
                                             }}
                                         />
                                         <Field name="picture" type="hidden" value={pictureDefaultValue}/>
                                     </Form.Group>
                                     <Form.Group as={Col}
                                                 className={`md-${12 - imgCols}`}
                                                 controlId="formGridName">
                                         <Field name="name" placeholder="Name" value={nameDefaultValue}/>
                                     </Form.Group>
                                 </Form.Row>
                                 <Button variant="primary" type="submit" disabled={this.state.isUploading || isSubmitting}>
                                     Add dog!
                                 </Button>
                             </FormikForm>
                         </Card>
                     );
                }}
            </Formik>
        );
    }
}

export default withAuth0(AddDogForm);
