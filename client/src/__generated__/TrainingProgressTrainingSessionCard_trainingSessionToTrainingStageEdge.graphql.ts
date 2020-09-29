/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge = {
    readonly training_progress: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingProgressDisplay_trainingProgress">;
    };
    readonly node: {
        readonly id: string;
        readonly behavior: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior">;
        };
        readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
    } | null;
    readonly " $refType": "TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge";
};
export type TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge$data = TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge;
export type TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge$key = {
    readonly " $data"?: TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge">;
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
  "name": "TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TrainingProgress",
      "kind": "LinkedField",
      "name": "training_progress",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TrainingProgressDisplay_trainingProgress"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TrainingStage",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
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
          "name": "TrainingStageName_trainingStage"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TrainingSessionToTrainingStageEdge",
  "abstractKey": null
};
})();
(node as any).hash = '5f1d61934645abb6f267b14cdd1f1e53';
export default node;
