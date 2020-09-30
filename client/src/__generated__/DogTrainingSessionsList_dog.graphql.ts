/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogTrainingSessionsList_dog = {
    readonly id: string;
    readonly trainingSessions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"TrainingSessionCard_trainingSession">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "DogTrainingSessionsList_dog";
};
export type DogTrainingSessionsList_dog$data = DogTrainingSessionsList_dog;
export type DogTrainingSessionsList_dog$key = {
    readonly " $data"?: DogTrainingSessionsList_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogTrainingSessionsList_dog">;
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
  "name": "DogTrainingSessionsList_dog",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "trainingSessions",
      "args": null,
      "concreteType": "TrainingSessionConnection",
      "kind": "LinkedField",
      "name": "__DogTrainingSessionsList_trainingSessions_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TrainingSessionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TrainingSession",
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
                  "name": "TrainingSessionCard_trainingSession"
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
  "type": "Dog",
  "abstractKey": null
};
})();
(node as any).hash = 'f7721bb8c039bc14b170d775fe895774';
export default node;
