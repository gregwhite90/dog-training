import React from 'react';
import DogsRenderer from './renderers/DogsRenderer';

import { Formik, Field, Form } from 'formik';
import logo from './logo.svg';
import './App.css';

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
                    humanName: '',
                }}
                onSubmit={(values) => props.handleSubmit(values.humanName)}
            >
                <Form>
                    <label htmlFor="humanName">Name</label>
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
        this.getHumans();
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
                    <DogsRenderer />
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
