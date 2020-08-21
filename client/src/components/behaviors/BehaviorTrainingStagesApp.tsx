import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import BehaviorTrainingStagesList from './BehaviorTrainingStagesList';

import type { BehaviorTrainingStagesApp_behavior } from '__generated__/BehaviorTrainingStagesApp_behavior.graphql';
import type { match } from 'react-router-dom';

interface BehaviorTrainingStagesAppProps {
    behavior: BehaviorTrainingStagesApp_behavior,
    match: match<{}>,
};

const BehaviorTrainingStagesApp: React.FC<BehaviorTrainingStagesAppProps> = (props) => {
    return (
        <>
            <h3>Training stages for {props.behavior.name}</h3>
            <BehaviorTrainingStagesList behavior={props.behavior} match={props.match} />
            <Link to={props.match.url + "/add"}>
                <Button variant="primary">Add training stages</Button>
            </Link>
        </>
    );
}

export default createFragmentContainer(BehaviorTrainingStagesApp, {
    behavior: graphql`
        fragment BehaviorTrainingStagesApp_behavior on Behavior {
            id
            name
            ...BehaviorTrainingStagesList_behavior
        }
    `,
});
