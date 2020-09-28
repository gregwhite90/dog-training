/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageTrainingProgressesList_trainingStage = {
    readonly id: string;
    readonly behavior: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"BehaviorName_behavior">;
    };
    readonly trainingSessions: {
        readonly edges: ReadonlyArray<{
            readonly training_progress: {
                readonly seq: number;
            };
            readonly " $fragmentRefs": FragmentRefs<"TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge">;
        } | null> | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
    readonly " $refType": "TrainingStageTrainingProgressesList_trainingStage";
};
export type TrainingStageTrainingProgressesList_trainingStage$data = TrainingStageTrainingProgressesList_trainingStage;
export type TrainingStageTrainingProgressesList_trainingStage$key = {
    readonly " $data"?: TrainingStageTrainingProgressesList_trainingStage$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageTrainingProgressesList_trainingStage">;
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
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "trainingSessions"
        ]
      }
    ]
  },
  "name": "TrainingStageTrainingProgressesList_trainingStage",
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
      "alias": "trainingSessions",
      "args": null,
      "concreteType": "TrainingStageToTrainingSessionConnection",
      "kind": "LinkedField",
      "name": "__TrainingStageTrainingProgressesList_trainingSessions_connection",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TrainingSession",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
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
  "type": "TrainingStage",
  "abstractKey": null
};
})();
(node as any).hash = '1a2937ac842b3cd4b6c1d295519b76b7';
export default node;
