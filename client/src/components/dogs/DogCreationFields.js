import React from 'react';
import Container from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Button'
import Button from 'react-bootstrap/Button'

class DogCreationFields extends React.Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this);
    }

    saveAndContinue(e) {
        e.preventDefault();
        const data = {
            name: document.getElementById('name').value,
        };
        this.props.saveCreation(data);
    }

    render() {
        return (
            <Container>
                <Row>
                    <label>Name</label>
                    <input type="text"
                           id="name"
                           placeholder="Name"
                           defaultValue={this.props.fieldValues.name}
                    />
                </Row>
                <Row>
                    <Button variant="primary" onClick={this.saveAndContinue}>
                        Upload an image!
                    </Button>
                </Row>
            </Container>
        );
    }
}

export default DogCreationFields;
