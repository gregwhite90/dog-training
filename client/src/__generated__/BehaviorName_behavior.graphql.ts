/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorName_behavior = {
    readonly name: string;
    readonly " $refType": "BehaviorName_behavior";
};
export type BehaviorName_behavior$data = BehaviorName_behavior;
export type BehaviorName_behavior$key = {
    readonly " $data"?: BehaviorName_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorName_behavior",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '9fa0463d4841bdda1605fa687285777f';
export default node;
