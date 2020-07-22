import React from 'react';
import { Formik, Field, Form } from 'formik';
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
    const breedLinks = breeds.map((breed, i) => {
        return (<>{i ? ', ' : ''}<a key={breed.id} href={breed.infoLink}>{breed.name}</a></>);
    });
    return (
        <span>
            ({breedLinks})
        </span>
    );
}

function DogList(props) {
    const dogEdges = props.dogEdges;
    if (!dogEdges) {
        return null;
    }
    const listItems = dogEdges.map((dogEdge) => {
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

function HumanList(props) {
    const humanEdges = props.humanEdges;
    if (!humanEdges) {
        return null;
    }
    const listItems = humanEdges.map((humanEdge) => {
        const human = humanEdge.node;
        return (
            <li key={human.id}>
                {human.name}
            </li>
        );
    });
    return (
        <ul>
            {listItems}
        </ul>
    );
}

function HumanForm(props) {
    return (
        <div>
            <h1>Add a human</h1>
            <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={(values) => props.handleSubmit(values.humanName)}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="humanName" name="humanName" />

                    <button type="submit">Add human!</button>
                </Form>
            </Formik>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: null,
            humans: null,
        };
    }

    componentDidMount() {
        this.getEntities();
    }

    addHuman = (name) => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `mutation IntroduceHuman($input: IntroduceHumanInput!) {
                    introduceHuman(input: $input) {
                        human {
                            name
                            id
                        }
                    }
                }`,
                variables: {
                    input: { name }
                },
            }),
        })
            .then(res => res.json());
        // Update list from backend
        this.getHumans();
    }

    getEntities = () => {
        this.getDogs();
        this.getHumans();
    }

    getDogs = () => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: `query GetAllDogs {
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
            .then(data => this.setState({
                dogs: data.data.dogs.edges,
            }));
    }

    getHumans = () => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: `query GetAllHumans {
                humans {
                    edges {
                        node {
                            name
                            id
                        }
                    }
                }
            }`}),
        })
            .then(res => res.json())
            .then(data => this.setState({
                humans: data.data.humans.edges,
            }));
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
                    <DogList dogEdges={this.state.dogs} />
                    <p>
                        Humans in the system:
                    </p>
                    <HumanList humanEdges={this.state.humans} />
                    <HumanForm handleSubmit={this.addHuman}/>
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
