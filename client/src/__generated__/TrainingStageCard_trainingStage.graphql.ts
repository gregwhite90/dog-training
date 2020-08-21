/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IncentiveMethod = "LURE" | "SHAPE" | "%future added value";
export type RewardFrequency = "CONTINUOUS" | "INTERMITTENT" | "%future added value";
export type TrainingStageCard_trainingStage = {
    readonly seq: number;
    readonly incentive: boolean;
    readonly verbal: boolean;
    readonly hand: boolean;
    readonly reward_frequency: RewardFrequency | null;
    readonly behavior: {
        readonly incentive_method: IncentiveMethod | null;
        readonly verbal_command: string | null;
    } | null;
    readonly " $refType": "TrainingStageCard_trainingStage";
};
export type TrainingStageCard_trainingStage$data = TrainingStageCard_trainingStage;
export type TrainingStageCard_trainingStage$key = {
    readonly " $data"?: TrainingStageCard_trainingStage$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageCard_trainingStage">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingStageCard_trainingStage",
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
      "name": "incentive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verbal",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hand",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reward_frequency",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Behavior",
      "kind": "LinkedField",
      "name": "behavior",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "incentive_method",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "verbal_command",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
(node as any).hash = 'b5e564264fe7193964eafca19ef8ea43';
export default node;
