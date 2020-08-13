/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserDogRole = "OWNER" | "TRAINER" | "VIEWER" | "%future added value";
export type DogsList_viewer = {
    readonly id: string;
    readonly dogs: {
        readonly edges: ReadonlyArray<{
            readonly user_role: UserDogRole | null;
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"DogCard_dog">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "DogsList_viewer";
};
export type DogsList_viewer$data = DogsList_viewer;
export type DogsList_viewer$key = {
    readonly " $data"?: DogsList_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"DogsList_viewer">;
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
          "dogs"
        ]
      }
    ]
  },
  "name": "DogsList_viewer",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "dogs",
      "args": null,
      "concreteType": "UserToDogConnection",
      "kind": "LinkedField",
      "name": "__DogsList_dogs_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserToDogEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "user_role",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Dog",
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
                  "name": "DogCard_dog"
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
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '072c37465d6a90910964ff0aee2c3464';
export default node;
