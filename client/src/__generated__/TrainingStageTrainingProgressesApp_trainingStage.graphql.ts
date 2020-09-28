/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageTrainingProgressesApp_trainingStage = {
    readonly id: string;
    readonly behavior: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior">;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageTrainingProgressesList_trainingStage" | "TrainingStageName_trainingStage">;
    readonly " $refType": "TrainingStageTrainingProgressesApp_trainingStage";
};
export type TrainingStageTrainingProgressesApp_trainingStage$data = TrainingStageTrainingProgressesApp_trainingStage;
export type TrainingStageTrainingProgressesApp_trainingStage$key = {
    readonly " $data"?: TrainingStageTrainingProgressesApp_trainingStage$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageTrainingProgressesApp_trainingStage">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingStageTrainingProgressesApp_trainingStage",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Behavior",
      "kind": "LinkedField",
      "name": "behavior",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BehaviorName_behavior"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingStageTrainingProgressesList_trainingStage"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingStageName_trainingStage"
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
})();
(node as any).hash = 'e358d5c32c9ec08189316e5a363aa224';
export default node;
