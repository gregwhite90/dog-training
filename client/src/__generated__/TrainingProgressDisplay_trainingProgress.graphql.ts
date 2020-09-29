/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QualitativeLevel = "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type TrainingProgressDisplay_trainingProgress = {
    readonly seq: number;
    readonly successes: number | null;
    readonly attempts: number | null;
    readonly distance: QualitativeLevel | null;
    readonly distractions: QualitativeLevel | null;
    readonly duration: QualitativeLevel | null;
    readonly " $refType": "TrainingProgressDisplay_trainingProgress";
};
export type TrainingProgressDisplay_trainingProgress$data = TrainingProgressDisplay_trainingProgress;
export type TrainingProgressDisplay_trainingProgress$key = {
    readonly " $data"?: TrainingProgressDisplay_trainingProgress$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingProgressDisplay_trainingProgress">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingProgressDisplay_trainingProgress",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "seq",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "successes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "attempts",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "distance",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "distractions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "duration",
      "storageKey": null
    }
  ],
  "type": "TrainingProgress",
  "abstractKey": null
};
(node as any).hash = 'cb2fc54a01e3bd20afbd67c17d2831f7';
export default node;
