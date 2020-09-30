/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingStagesApp_behavior = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "BehaviorTrainingStagesList_behavior"
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
(node as any).hash = '96a31e1a3e3597838ed85aa30d1f9136';
export default node;
