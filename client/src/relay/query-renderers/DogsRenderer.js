import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

export default function DogsRenderer({relay: { environment },
                                      nodesCallback}) {
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
                            <>
                                {props.dogs.edges
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
