/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type QualitativeLevel = "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type TrainingSessionTrainingProgressesList_trainingSession = {
    readonly id: string;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
            readonly seq: number;
            readonly successes: number | null;
            readonly attempts: number | null;
            readonly distance: QualitativeLevel | null;
            readonly distractions: QualitativeLevel | null;
            readonly duration: QualitativeLevel | null;
        } | null> | null;
    } | null;
    readonly " $refType": "TrainingSessionTrainingProgressesList_trainingSession";
};
export type TrainingSessionTrainingProgressesList_trainingSession$data = TrainingSessionTrainingProgressesList_trainingSession;
export type TrainingSessionTrainingProgressesList_trainingSession$key = {
    readonly " $data"?: TrainingSessionTrainingProgressesList_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionTrainingProgressesList_trainingSession">;
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
  "name": "TrainingSessionTrainingProgressesList_trainingSession",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "trainingStages",
      "args": null,
      "concreteType": "TrainingSessionToTrainingStageConnection",
      "kind": "LinkedField",
      "name": "__TrainingSessionTrainingProgressesList_trainingStages_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TrainingSessionToTrainingStageEdge",
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
                }
              ],
              "storageKey": null
            },
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
  "type": "TrainingSession",
  "abstractKey": null
};
})();
(node as any).hash = '9959e035f48c23c243671628f4b15f2a';
export default node;
