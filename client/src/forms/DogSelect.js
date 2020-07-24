import React from 'react';
import { Field } from 'formik';
import { graphql, QueryRenderer } from 'react-relay';
//import DogName from '../relay-containers/DogName';

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
                                name
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
                                <option value={defaultValue} disabled>{defaultText}</option>
                                {props.dogs.edges
                                      .map(e => e.node)
                                      .map(node => {
                                          // TODO: delete
                                          console.log(node);
                                          return (
                                              <option key={node.id} value={node.id} label={node.name}>
                                                  {node.name}
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
