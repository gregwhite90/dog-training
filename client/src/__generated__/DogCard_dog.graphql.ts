/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogCard_dog = {
    readonly name: string;
    readonly picture: string | null;
    readonly " $refType": "DogCard_dog";
};
export type DogCard_dog$data = DogCard_dog;
export type DogCard_dog$key = {
    readonly " $data"?: DogCard_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogCard_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogCard_dog",
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
      "name": "picture",
      "storageKey": null
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = 'bcaeea5136db7c8a55eec3c41daaaa0f';
export default node;
