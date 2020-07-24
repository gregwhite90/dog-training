import React from 'react';
import { Field } from 'formik';
import { graphql, QueryRenderer } from 'react-relay';
// import BreedName from '../relay-containers/BreedName';

function BreedSelect({relay: { environment }, name, defaultValue, defaultText}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query BreedSelectQuery {
                    breeds {
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
                                {props.breeds.edges
                                      .map(e => e.node)
                                      .map(node => {
                                          console.log(node);
                                          return React.createElement('option',
                                                                     {
                                                                         key: node.id,
                                                                         value: node.id,
                                                                         label: node.name,
                                                                     },
                                                                     node.name);
                                      })}
                            </Field>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}

export default BreedSelect;
