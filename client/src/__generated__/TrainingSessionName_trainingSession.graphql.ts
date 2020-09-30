/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionName_trainingSession = {
    readonly start_timestamp: unknown;
    readonly minutes_long: number | null;
    readonly " $refType": "TrainingSessionName_trainingSession";
};
export type TrainingSessionName_trainingSession$data = TrainingSessionName_trainingSession;
export type TrainingSessionName_trainingSession$key = {
    readonly " $data"?: TrainingSessionName_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionName_trainingSession">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingSessionName_trainingSession",
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
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
(node as any).hash = 'e0db8a425470e321a2b9445e0c9b2867';
export default node;
