/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageName_trainingStage = {
    readonly seq: number;
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
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
(node as any).hash = 'c1668d3c0635b57bf2014b4150790506';
export default node;
