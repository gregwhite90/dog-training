/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBreadcrumb_dog = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "DogBreadcrumb_dog";
};
export type DogBreadcrumb_dog$data = DogBreadcrumb_dog;
export type DogBreadcrumb_dog$key = {
    readonly " $data"?: DogBreadcrumb_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogBreadcrumb_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogBreadcrumb_dog",
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
(node as any).hash = 'a139cffcf43d2cbba282a563db5f4ae1';
export default node;
