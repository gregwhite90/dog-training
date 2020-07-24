import React from 'react';
import environment from './lib/createRelayEnvironment';
import DogsRenderer from './renderers/DogsRenderer';
import HumanForm from './forms/HumanForm';
import BreedsForm from './forms/BreedsForm';
import DogDisplay from './relay-containers/DogDisplay';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relay: {
                environment
            },
        };
    }

    dogListCallback = (dog) => {
        return (
            <li key={dog.id}>
                <DogDisplay dog={dog} />
            </li>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <BreedsForm relay={{environment}} />
                    <p>
                        Dogs in the system:
                    </p>
                    <ul>
                        <DogsRenderer relay={{environment}} nodeCallback={this.dogListCallback} />
                    </ul>
                    <HumanForm relay={{environment}} />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
