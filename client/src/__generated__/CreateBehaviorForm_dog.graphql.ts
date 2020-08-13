/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateBehaviorForm_dog = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "CreateBehaviorForm_dog";
};
export type CreateBehaviorForm_dog$data = CreateBehaviorForm_dog;
export type CreateBehaviorForm_dog$key = {
    readonly " $data"?: CreateBehaviorForm_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateBehaviorForm_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateBehaviorForm_dog",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = 'aaa221e6f628040bd7cf9efb54c0234a';
export default node;
