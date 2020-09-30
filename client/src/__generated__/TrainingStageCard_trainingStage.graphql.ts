/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IncentiveMethod = "LURE" | "SHAPE" | "%future added value";
export type RewardFrequency = "CONTINUOUS" | "INTERMITTENT" | "%future added value";
export type TrainingStageCard_trainingStage = {
    readonly incentive: boolean;
    readonly verbal: boolean;
    readonly hand: boolean;
    readonly reward_frequency: RewardFrequency;
    readonly behavior: {
        readonly incentive_method: IncentiveMethod | null;
        readonly verbal_command: string | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingStageName_trainingStage"
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
(node as any).hash = '59f44866162bbab608396cf05386cf76';
export default node;
