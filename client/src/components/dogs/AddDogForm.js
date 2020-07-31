import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { withAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ImageUpload from 'components/utils/ImageUpload';

class AddDogForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
        };
    }

    render() {
        const nameDefaultValue = '';
        const pictureDefaultValue = '';
        var imgCols = this.props.imgCols || 3; // TODO: fix to be consistent styling
        // TODO: figure out why the user id is not coming through
        // TODO: make sure the file upload change handler actually gets called
        console.log(this.props);
        return (
            <Formik initialValues={{ dog_name: nameDefaultValue, uploaded_picture: pictureDefaultValue }}
                    onSubmit={({ dog_name, uploaded_picture }, { setSubmitting, resetForm }) => {
                            // TODO: figure out what to do with the file input
                            console.log()
                            let picture = uploaded_picture;
                            if (uploaded_picture === '') {
                                picture = null;
                            }
                            this.props.onSubmit({ name: dog_name, picture },
                                                () => {
                                                    setSubmitting(false);
                                                    resetForm();
                                                });
                    }}
            >
                {({ isSubmitting, setSubmitting, setFieldValue, resetForm, values }) => {
                     return (
                         <Container fluid="md" className="p-3 mb-3 border rounded">
                             <FormikForm>
                                 <Form.Row>
                                     <Form.Group controlId="formGridPicture">
                                         <ImageUpload
                                             onStartUploading={() => {
                                                     this.setState({isUploading: true});
                                             }}
                                             onFinishUploading={(url) => {
                                                     if (url) {
                                                         setFieldValue('uploaded_picture', url);
                                                     }
                                                     this.setState({isUploading: false});
                                             }}
                                             toImageChild={{ className: `col-md-${imgCols}`,
                                                             thumbnail: true,
                                                             fluid: true}}
                                         />
                                         <Field name="uploaded_picture" type="hidden"/>
                                     </Form.Group>
                                 </Form.Row>
                                 <Form.Row>
                                     <Form.Group controlId="formGridName">
                                         <Field name="dog_name" placeholder="Name"/>
                                     </Form.Group>
                                 </Form.Row>
                                 <Form.Row>
                                     <Button
                                         variant="primary"
                                         type="submit"
                                         disabled={this.state.isUploading || isSubmitting}
                                     >
                                         Add dog!
                                     </Button>
                                 </Form.Row>
                             </FormikForm>
                         </Container>
                     );
                }}
            </Formik>
        );
    }
}

export default withAuth0(AddDogForm);
