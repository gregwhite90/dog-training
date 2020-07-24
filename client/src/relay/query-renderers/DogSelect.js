import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import selectRender from './utils/selectRender';

function DogSelect({relay: { environment },
                    name,
                    defaultValue,
                    defaultText}) {
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
            render={selectRender({
                    propName: "dogs",
                    fieldName: name,
                    defaultValue,
                    defaultText,
            })}
        />
    );
}

export default DogSelect;
