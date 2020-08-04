import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import DogCreationFields from './DogCreationFields';
import DogImageUploader from './DogImageUploader';
import DogCreationSuccess from './DogCreationSuccess';

import AddDogMutation from 'relay/mutations/AddDogMutation';
import EditDogMutation from 'relay/mutations/EditDogMutation';

class DogAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
        };
        this.fieldValues = {
            id: null,
            name: null,
            picture: null,
        };
        this.saveCreation = this.saveCreation.bind(this);
        this.savePicture = this.savePicture.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    saveCreation(name) {
        // TODO: call mutation, pass into id
        AddDogMutation.commit(
            this.props.relay.environment,
            {name, picture: null},
            this.props.viewer,
            (response, errors) => {
                this.fieldValues.id = response.dogEdge.node.id;
                this.fieldValues.name = name;
                this.nextStep();
            });
    }

    savePicture(picture) {
        // TODO: create and call mutation
        EditDogMutation.commit(
            this.props.relay.environment,
            {id: this.state.id, picture},
            (response, errors) => {
                this.fieldValues.picture = picture;
                this.nextStep();
            };
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1;
        });
    }

    render() {
        switch (this.state.step) {
            case 0:
                return <DogCreationFields fieldValues={this.fieldValues}
                                          saveCreation={this.saveCreation} />;
            case 1:
                return <DogImageUploader fieldValues={this.fieldValues}
                                         nextStep={this.nextStep}
                                         savePicture={this.savePicture} />;
            case 2:
                return <Redirect to={`/dogs/${this.fieldValues.id}`}/>;
        }
    }
}

export default withAuth0(DogAdder);
