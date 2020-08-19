/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorCard_behavior = {
    readonly name: string;
    readonly explanation: string | null;
    readonly lure_description: string | null;
    readonly shape_description: string | null;
    readonly verbal_command: string | null;
    readonly hand_signal: string | null;
    readonly release_command: string | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lure_description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "shape_description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verbal_command",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hand_signal",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "release_command",
      "storageKey": null
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '2c1a185cdf90413363d3bdb5c3474ff0';
export default node;
