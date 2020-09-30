/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBehaviorsList_dog = {
    readonly id: string;
    readonly behaviors: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"BehaviorCard_behavior">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "DogBehaviorsList_dog";
};
export type DogBehaviorsList_dog$data = DogBehaviorsList_dog;
export type DogBehaviorsList_dog$key = {
    readonly " $data"?: DogBehaviorsList_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"DogBehaviorsList_dog">;
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
          "behaviors"
        ]
      }
    ]
  },
  "name": "DogBehaviorsList_dog",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "behaviors",
      "args": null,
      "concreteType": "BehaviorConnection",
      "kind": "LinkedField",
      "name": "__DogBehaviorsList_behaviors_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BehaviorEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Behavior",
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
                  "name": "BehaviorCard_behavior"
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
(node as any).hash = '295cd0b4bbf1d567b69df3606cf047f7';
export default node;
