import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import CardDeck from 'react-bootstrap/CardDeck';

import DogCard from '../containers/DogCard';

export default function DogsList({relay: { environment }}) {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query DogsListQuery {
                    viewer {
                        dogs {
                            edges {
                                node {
                                    id
                                    ...DogCard_dog
                                }
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
                            <CardDeck>
                                {props.viewer.dogs.edges
                                      .map(e => e.node)
                                      .map(dog => <DogCard key={dog.id} dog={dog}/>)
                                }
                            </CardDeck>
                        );
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}
