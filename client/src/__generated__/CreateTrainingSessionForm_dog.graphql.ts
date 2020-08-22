/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateTrainingSessionForm_dog = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "CreateTrainingSessionForm_dog";
};
export type CreateTrainingSessionForm_dog$data = CreateTrainingSessionForm_dog;
export type CreateTrainingSessionForm_dog$key = {
    readonly " $data"?: CreateTrainingSessionForm_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateTrainingSessionForm_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateTrainingSessionForm_dog",
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
(node as any).hash = '097f50926d1930965d5e91a0227cfd3c';
export default node;
