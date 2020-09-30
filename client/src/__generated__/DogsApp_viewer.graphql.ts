/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogsApp_viewer = {
    readonly " $fragmentRefs": FragmentRefs<"DogsList_viewer">;
    readonly " $refType": "DogsApp_viewer";
};
export type DogsApp_viewer$data = DogsApp_viewer;
export type DogsApp_viewer$key = {
    readonly " $data"?: DogsApp_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"DogsApp_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogsApp_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogsList_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'b95acf68e5aa59a90efa424a1c36a60e';
export default node;
