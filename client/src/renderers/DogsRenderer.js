import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import DogDisplay from '../relay-containers/DogDisplay';

export default function DogsRenderer({relay: { environment }}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query DogsRendererQuery {
                    dogs {
                        edges {
                            node {
                                id
                                ...DogDisplay_dog
                            }
                        }
                    }
                }
                `}
            render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <ul>
                                {props.dogs.edges
                                      .map(e => e.node)
                                      .map(d => {
                                          return (
                                              <li key={d.id}>
                                                  <DogDisplay dog={d} />
                                              </li>
                                          );
                                      })}
                            </ul>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}
