import React from 'react';
import logo from './logo.svg';
import './App.css';

function DogList(props) {
    const dogs = props.dogs;
    if (!dogs) {
        return null;
    }
    const listItems = dogs.map((dogNode) => {
        const dog = dogNode.node;
        const breedNodes = dog.breeds.edges;
        return (
            <li key={dog.id}>
                {dog.name}: ({breedNodes.map((breedNode) => breedNode.node.name).join(', ')})
            </li>
        );
    });
    return (
        <ul>
            {listItems}
        </ul>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: null,
        };
    }

    componentDidMount() {
        this.getEntities();
    }

    getEntities = () => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: `{
                dogs {
                    edges {
                        node {
                            name
                            id
                            breeds {
                                edges {
                                    node {
                                        name
                                        infoLink
                                    }
                                }
                            }
                        }
                    }
                }
            }`}),
        })
            .then(res => res.json())
            .then(data => this.setState({dogs: data.data.dogs.edges}));
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
                        <DogList dogs={this.state.dogs} />
                    </p>
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
