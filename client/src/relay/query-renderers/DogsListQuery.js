import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import DogsList from '../containers/DogsList';

export default function DogsListQuery(props) {
    return (
        <QueryRenderer
            environment={props.relay.environment}
            query={graphql`
                query DogsListQuery {
                    viewer {
                        ...DogsList_user
                    }
                }
                `}
            render={({error, props}) => {
                    if (error) {
                        console.log(error);
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return <DogsList user={props.viewer}/>;
                    }
                    return <div>Loading</div>;
            }}
        />
    );
}
