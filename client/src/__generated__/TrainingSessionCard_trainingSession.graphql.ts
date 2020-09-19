/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionCard_trainingSession = {
    readonly dog: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionName_trainingSession">;
    readonly " $refType": "TrainingSessionCard_trainingSession";
};
export type TrainingSessionCard_trainingSession$data = TrainingSessionCard_trainingSession;
export type TrainingSessionCard_trainingSession$key = {
    readonly " $data"?: TrainingSessionCard_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionCard_trainingSession">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingSessionCard_trainingSession",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Dog",
      "kind": "LinkedField",
      "name": "dog",
      "plural": false,
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
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingSessionName_trainingSession"
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
(node as any).hash = '0bae4283f28b0470622abb4190b464b8';
export default node;
