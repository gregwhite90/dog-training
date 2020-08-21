/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingStagesApp_behavior = {
    readonly id: string;
    readonly name: string;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingStagesList_behavior">;
    readonly " $refType": "BehaviorTrainingStagesApp_behavior";
};
export type BehaviorTrainingStagesApp_behavior$data = BehaviorTrainingStagesApp_behavior;
export type BehaviorTrainingStagesApp_behavior$key = {
    readonly " $data"?: BehaviorTrainingStagesApp_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingStagesApp_behavior">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorTrainingStagesApp_behavior",
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
      "name": "BehaviorTrainingStagesList_behavior"
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '8351f0589e525452458158f6445c511b';
export default node;
