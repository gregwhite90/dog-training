/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionTrainingProgressesList_trainingSession = {
    readonly id: string;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly training_progress: {
                readonly seq: number;
            };
            readonly " $fragmentRefs": FragmentRefs<"TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge">;
        } | null> | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionName_trainingSession">;
    readonly " $refType": "TrainingSessionTrainingProgressesList_trainingSession";
};
export type TrainingSessionTrainingProgressesList_trainingSession$data = TrainingSessionTrainingProgressesList_trainingSession;
export type TrainingSessionTrainingProgressesList_trainingSession$key = {
    readonly " $data"?: TrainingSessionTrainingProgressesList_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionTrainingProgressesList_trainingSession">;
};



const node: ReaderFragment = {
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
              "concreteType": "TrainingStage",
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
              "name": "TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge"
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
      "name": "TrainingSessionName_trainingSession"
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
(node as any).hash = '4d5fb462f3c6bbc2d306e72799816f6c';
export default node;
