/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IncentiveMethod = "LURE" | "SHAPE" | "%future added value";
export type RewardFrequency = "CONTINUOUS" | "INTERMITTENT" | "%future added value";
export type TrainingStageName_trainingStage = {
    readonly seq: number;
    readonly incentive: boolean;
    readonly behavior: {
        readonly incentive_method: IncentiveMethod | null;
    };
    readonly verbal: boolean;
    readonly hand: boolean;
    readonly reward_frequency: RewardFrequency;
    readonly " $refType": "TrainingStageName_trainingStage";
};
export type TrainingStageName_trainingStage$data = TrainingStageName_trainingStage;
export type TrainingStageName_trainingStage$key = {
    readonly " $data"?: TrainingStageName_trainingStage$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingStageName_trainingStage",
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
        }
      ],
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
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
(node as any).hash = '6f8f9495542b00ee6fbe3de222cd8a30';
export default node;
