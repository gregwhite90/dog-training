import React from 'react';
import { Field } from 'formik';
import { graphql, QueryRenderer } from 'react-relay';
import DogName from '../relay-containers/DogName';

function DogSelect({relay: { environment }, name, defaultValue, defaultText}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query DogSelectQuery {
                    dogs {
                        edges {
                            node {
                                id
                                ...DogName_dog
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
                            <Field as="select" name={name}>
                                <option value={defaultValue}>{defaultText}</option>
                                {props.dogs.edges
                                      .map(e => e.node)
                                      .map(node => {
                                          return (
                                              <option key={node.id} value={node.id}>
                                                  <DogName dog={node} />
                                              </option>
                                          );
                                      })}
                            </Field>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}

export default DogSelect;
