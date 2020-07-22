import React from 'react';
import logo from './logo.svg';
import './App.css';

function DogDisplay(props) {
    const { name, breedEdges } = props;
    const breeds = breedEdges.map((breedEdge) => breedEdge.node);
    return (
        <>{name}: <BreedsDisplay breeds={breeds} /></>
    );
}

function BreedsDisplay(props) {
    const { breeds } = props;
    console.log(breeds);
    const breedLinks = breeds.map((breed, i) => {
        return (<>{i ? ', ' : ''}<a key={breed.id} href={breed.infoLink}>{breed.name}</a></>);
    });
    console.log(breedLinks);
    return (
        <span>
            ({breedLinks})
        </span>
    );
}

function DogList(props) {
    const dogs = props.dogs;
    if (!dogs) {
        return null;
    }
    const listItems = dogs.map((dogEdge) => {
        const dog = dogEdge.node;
        const breedEdges = dog.breeds.edges;
        return (
            <li key={dog.id}>
                <DogDisplay name={dog.name} breedEdges={breedEdges} />
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
                                        id
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
                    </p>
                        <DogList dogs={this.state.dogs} />
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
