/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingStagesList_behavior = {
    readonly id: string;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"TrainingStageCard_trainingStage">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "BehaviorTrainingStagesList_behavior";
};
export type BehaviorTrainingStagesList_behavior$data = BehaviorTrainingStagesList_behavior;
export type BehaviorTrainingStagesList_behavior$key = {
    readonly " $data"?: BehaviorTrainingStagesList_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingStagesList_behavior">;
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
          "trainingStages"
        ]
      }
    ]
  },
  "name": "BehaviorTrainingStagesList_behavior",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "trainingStages",
      "args": null,
      "concreteType": "TrainingStageConnection",
      "kind": "LinkedField",
      "name": "__BehaviorTrainingStagesList_trainingStages_connection",
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
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TrainingStageCard_trainingStage"
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
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
})();
(node as any).hash = '372a09829d05df9ad655102cae3f6aed';
export default node;
