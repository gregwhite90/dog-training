import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                    <Col>
                        <label>Name</label>
                        <input type="text"
                               id="name"
                               placeholder="Name"
                               defaultValue={this.props.fieldValues.name}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={this.saveAndContinue}>
                            Upload an image!
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DogCreationFields;
