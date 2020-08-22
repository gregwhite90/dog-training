/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionCard_trainingSession = {
    readonly start_timestamp: unknown;
    readonly minutes_long: number | null;
    readonly dog: {
        readonly id: string;
        readonly name: string;
    } | null;
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
      "kind": "ScalarField",
      "name": "start_timestamp",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minutes_long",
      "storageKey": null
    },
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
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
(node as any).hash = 'f4f05ff21f95d286bbebfb725b507610';
export default node;
