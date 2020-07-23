import React from 'react';
import environment from './lib/createRelayEnvironment';
import DogsRenderer from './renderers/DogsRenderer';
import HumansRenderer from './renderers/HumansRenderer';
import HumanForm from './forms/HumanForm';

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

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        Dogs in the system:
                    </p>
                    <DogsRenderer relay={{environment}}/>
                    <p>
                        Humans in the system:
                    </p>
                    <HumansRenderer relay={{environment}}/>
                    <HumanForm relay={{environment}}/>
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
