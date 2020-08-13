/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogsApp_viewer = {
    readonly id: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogsList_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'ace7cd433c0c10a26fe4eb65bde6d7fc';
export default node;
