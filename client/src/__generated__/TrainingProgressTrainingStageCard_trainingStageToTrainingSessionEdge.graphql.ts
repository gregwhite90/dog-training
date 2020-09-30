/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge = {
    readonly training_progress: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingProgressDisplay_trainingProgress">;
    };
    readonly node: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"TrainingSessionName_trainingSession">;
    } | null;
    readonly " $refType": "TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge";
};
export type TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge$data = TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge;
export type TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge$key = {
    readonly " $data"?: TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TrainingProgress",
      "kind": "LinkedField",
      "name": "training_progress",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TrainingProgressDisplay_trainingProgress"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TrainingSession",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TrainingSessionName_trainingSession"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TrainingStageToTrainingSessionEdge",
  "abstractKey": null
};
(node as any).hash = 'e9c2b044a4634da41202487391e7c6bf';
export default node;
