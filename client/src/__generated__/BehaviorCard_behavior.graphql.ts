/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorCard_behavior = {
    readonly name: string;
    readonly explanation: string | null;
    readonly " $refType": "BehaviorCard_behavior";
};
export type BehaviorCard_behavior$data = BehaviorCard_behavior;
export type BehaviorCard_behavior$key = {
    readonly " $data"?: BehaviorCard_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorCard_behavior">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorCard_behavior",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "explanation",
      "storageKey": null
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '4a93300c673db42757cd1c1ac884d1bd';
export default node;
