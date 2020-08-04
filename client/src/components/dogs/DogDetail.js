import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import DogCard from './DogCard';

// TODO: authorization check

export default function DogDetail(props) {
    return (
        <QueryRenderer
            environment={props.relay.environment}
            query={graphql`
                query DogDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...DogCard_dog
                    }
                }
                `}
            variables={{id: props.match.path}}
            render={({error, props}) => {
                    if (props && props.node) {
                        return <DogCard dog={node} />;
                    } else if (error) {
                        console.log(error);
                        return <div>error.message</div>;
                    }

                    return <div>Loading...</div>;
            }}
        />
    );
}
