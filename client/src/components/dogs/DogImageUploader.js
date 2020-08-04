import React from 'react';
import Container from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Button'
import Button from 'react-bootstrap/Button'

import ImageUpload from '../utils/ImageUpload';

class DogImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this);
    }

    saveAndContinue(e) {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value;
        };
        this.props.savePicture(data);
    }

    render() {
        return (
            <Container>
                <Row>
                    <ImageUpload savePicture={this.props.savePicture} />
                </Row>
            </Container>
        );
    }
}
