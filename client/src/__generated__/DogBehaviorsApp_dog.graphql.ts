/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBehaviorsApp_dog = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogBehaviorsList_dog"
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = 'a852791aee7bea8fd09df5d031445e07';
export default node;
