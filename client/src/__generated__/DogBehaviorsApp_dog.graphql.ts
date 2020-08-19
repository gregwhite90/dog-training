/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBehaviorsApp_dog = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"DogBehaviorsList_dog">;
    readonly " $refType": "DogBehaviorsApp_dog";
};
export type DogBehaviorsApp_dog$data = DogBehaviorsApp_dog;
export type DogBehaviorsApp_dog$key = {
    readonly " $data"?: DogBehaviorsApp_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogBehaviorsApp_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogBehaviorsApp_dog",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogBehaviorsList_dog"
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = 'bf9eb6db12239ec3a8c1463062cf4e36';
export default node;
