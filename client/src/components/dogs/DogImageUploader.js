import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ImageUpload from '../utils/ImageUpload';

export default function DogImageUploader(props) {
    return (
        <Container>
            <Row>
                <ImageUpload
                    savePicture={props.savePicture}
                    pathArray={["dogs", props.fieldValues.id]}/>
            </Row>
        </Container>
    );
}
