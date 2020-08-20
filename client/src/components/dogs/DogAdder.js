import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import { withAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import HeaderBar from 'components/utils/HeaderBar';

import CreateDogForm from './CreateDogForm';
import DogImageUploader from './DogImageUploader';

import CreateDogMutation from 'relay/mutations/CreateDogMutation';
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

    saveCreation({name}, onCommitted) {
        // TODO: call mutation, pass into id
        CreateDogMutation.commit(
            this.props.relay.environment,
            {name, picture: null},
            (response, errors) => {
                console.log('in saveCreation onCompleted');
                console.log(response);
                console.log(errors);
                this.fieldValues.id = response.createDog.dogEdge.node.id;
                this.fieldValues.name = name;
                onCommitted();
                this.nextStep();
            });
    }

    savePicture({picture}) {
        // TODO: create and call mutation
        EditDogMutation.commit(
            this.props.relay.environment,
            {id: this.fieldValues.id, picture},
            (response, errors) => {
                this.fieldValues.picture = picture;
                this.nextStep();
            });
    }

    nextStep() {
        console.log(`In next step: ${this.state.step}`);
        this.setState((state, props) => ({
            step: state.step + 1,
        }));
    }

    render() {
        const header_bar_button = {
            text: "Dogs list",
            link: "/dogs",
        }
        const header_bar_header = {
            text: "Add a dog!",
        }
        switch (this.state.step) {
            case 0:
                return (
                    <>
                        <HeaderBar
                            button={header_bar_button}
                            header={header_bar_header}
                        />
                        <CreateDogForm
                            fieldValues={this.fieldValues}
                            saveCreation={this.saveCreation}
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <HeaderBar
                            button={header_bar_button}
                            header={header_bar_header}
                        />
                        <DogImageUploader
                            fieldValues={this.fieldValues}
                            savePicture={this.savePicture}
                        />
                    </>
                );
            case 2:
                return <Redirect to={`/dogs/${this.fieldValues.id}`}/>;
            default:
                console.log(`invalid step in DogAdder: ${this.state.step}`);
                this.setState({step: 0});
                break;
        }
    }
}

export default withAuthenticationRequired(withAuth0(DogAdder), {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
