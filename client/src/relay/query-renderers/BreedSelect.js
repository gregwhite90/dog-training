import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import selectRender from './utils/selectRender';

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
            render={selectRender({
                    propName: "breeds",
                    fieldName: name,
                    defaultValue,
                    defaultText,
            })}
        />
    );
}

export default BreedSelect;
