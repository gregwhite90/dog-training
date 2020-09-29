/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingProgressesApp_behavior = {
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior" | "BehaviorTrainingProgressesList_behavior">;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BehaviorName_behavior"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BehaviorTrainingProgressesList_behavior"
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '04092f8fde2a30c5a2a2b63d6335979b';
export default node;
