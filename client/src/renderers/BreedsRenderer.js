import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

export default function BreedsRenderer({relay: { environment },
                                        nodesCallback}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query BreedsRendererQuery {
                    breeds {
                        edges {
                            node {
                                id
                                ...BreedName_breed
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
                            <>
                                {props.breeds.edges
                                      .map(e => e.node)
                                      .map(nodesCallback)}
                            </>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}
