import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import DogCreationFields from './DogCreationFields';
import DogImageUploader from './DogImageUploader';

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

    saveCreation({name}) {
        // TODO: call mutation, pass into id
        AddDogMutation.commit(
            this.props.relay.environment,
            {name, picture: null},
            this.props.viewer,
            (response, errors) => {
                console.log('in saveCreation onCompleted');
                console.log(response);
                console.log(errors);
                this.fieldValues.id = response.addDog.dogEdge.node.id;
                this.fieldValues.name = name;
                this.nextStep();
            });
    }

    savePicture({picture}) {
        // TODO: create and call mutation
        EditDogMutation.commit(
            this.props.relay.environment,
            {id: this.state.id, picture},
            (response, errors) => {
                this.fieldValues.picture = picture;
                this.nextStep();
            });
    }

    nextStep() {
        console.log('In next step: ${this.state.step}');
        this.setState({
            step: this.state.step + 1,
        });
    }

    render() {
        switch (this.state.step) {
            case 0:
                return <DogCreationFields fieldValues={this.fieldValues}
                                          saveCreation={this.saveCreation} />;
            case 1:
                return <DogImageUploader fieldValues={this.fieldValues}
                                         savePicture={this.savePicture} />;
            case 2:
                return <Redirect to={`/dogs/${this.fieldValues.id}`}/>;
            default:
                console.log(`invalid step in DogAdder: ${this.state.step}`);
                this.setState({step: 0});
                break;
        }
    }
}

export default withAuth0(DogAdder);
