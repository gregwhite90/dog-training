/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingProgressesApp_behavior = {
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingProgressesList_behavior">;
    readonly " $refType": "BehaviorTrainingProgressesApp_behavior";
};
export type BehaviorTrainingProgressesApp_behavior$data = BehaviorTrainingProgressesApp_behavior;
export type BehaviorTrainingProgressesApp_behavior$key = {
    readonly " $data"?: BehaviorTrainingProgressesApp_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingProgressesApp_behavior">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorTrainingProgressesApp_behavior",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BehaviorTrainingProgressesList_behavior"
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '9e6158cc6177df901ce0e86bee08b7e5';
export default node;
