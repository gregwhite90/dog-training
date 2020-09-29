/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingProgressesList_behavior = {
    readonly id: string;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly trainingSessions: {
                    readonly edges: ReadonlyArray<{
                        readonly training_progress: {
                            readonly seq: number;
                        };
                        readonly " $fragmentRefs": FragmentRefs<"TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge">;
                    } | null> | null;
                } | null;
                readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
            } | null;
        } | null> | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior">;
    readonly " $refType": "BehaviorTrainingProgressesList_behavior";
};
export type BehaviorTrainingProgressesList_behavior$data = BehaviorTrainingProgressesList_behavior;
export type BehaviorTrainingProgressesList_behavior$key = {
    readonly " $data"?: BehaviorTrainingProgressesList_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingProgressesList_behavior">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorTrainingProgressesList_behavior",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "TrainingStageConnection",
      "kind": "LinkedField",
      "name": "trainingStages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TrainingStageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
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
                  "args": (v1/*: any*/),
                  "concreteType": "TrainingStageToTrainingSessionConnection",
                  "kind": "LinkedField",
                  "name": "trainingSessions",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "TrainingStageToTrainingSessionEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
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
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "seq",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge"
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "trainingSessions(first:2147483647)"
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
          "storageKey": null
        }
      ],
      "storageKey": "trainingStages(first:2147483647)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BehaviorName_behavior"
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
})();
(node as any).hash = 'f4ea949a8b9ea0f51f92d57713aa51d3';
export default node;
