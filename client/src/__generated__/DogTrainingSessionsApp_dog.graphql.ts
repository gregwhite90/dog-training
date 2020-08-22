/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogTrainingSessionsApp_dog = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"DogTrainingSessionsList_dog">;
    readonly " $refType": "DogTrainingSessionsApp_dog";
};
export type DogTrainingSessionsApp_dog$data = DogTrainingSessionsApp_dog;
export type DogTrainingSessionsApp_dog$key = {
    readonly " $data"?: DogTrainingSessionsApp_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogTrainingSessionsApp_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogTrainingSessionsApp_dog",
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
      "name": "DogTrainingSessionsList_dog"
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = '8e6c2e9f394f19efabbc3035db3152db';
export default node;
