/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IncentiveMethod = "LURE" | "SHAPE" | "%future added value";
export type CreateTrainingStagesForm_behavior = {
    readonly id: string;
    readonly name: string;
    readonly incentive_method: IncentiveMethod | null;
    readonly verbal_command: string | null;
    readonly " $refType": "CreateTrainingStagesForm_behavior";
};
export type CreateTrainingStagesForm_behavior$data = CreateTrainingStagesForm_behavior;
export type CreateTrainingStagesForm_behavior$key = {
    readonly " $data"?: CreateTrainingStagesForm_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateTrainingStagesForm_behavior">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateTrainingStagesForm_behavior",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "incentive_method",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verbal_command",
      "storageKey": null
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = 'b3e927fb4bb72bb863556c68d8dc0b93';
export default node;
