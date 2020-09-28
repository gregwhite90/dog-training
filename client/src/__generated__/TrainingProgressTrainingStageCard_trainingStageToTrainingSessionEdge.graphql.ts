/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QualitativeLevel = "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge = {
    readonly training_progress: {
        readonly seq: number;
        readonly successes: number | null;
        readonly attempts: number | null;
        readonly distance: QualitativeLevel | null;
        readonly distractions: QualitativeLevel | null;
        readonly duration: QualitativeLevel | null;
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "seq",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "successes",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "attempts",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "distance",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "distractions",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "duration",
          "storageKey": null
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
(node as any).hash = 'bbb43e2de4f16e1a977fc35869a64a46';
export default node;
