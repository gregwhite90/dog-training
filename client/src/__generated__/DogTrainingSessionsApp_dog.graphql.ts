/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogTrainingSessionsApp_dog = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogTrainingSessionsList_dog"
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = '3fcba43e303e7de6ea2d5d263239e1c0';
export default node;
