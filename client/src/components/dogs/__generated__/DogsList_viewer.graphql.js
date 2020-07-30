/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DogCard_dog$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DogsList_viewer$ref: FragmentReference;
declare export opaque type DogsList_viewer$fragmentType: DogsList_viewer$ref;
export type DogsList_viewer = {|
  +id: string,
  +dogs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: DogCard_dog$ref,
      |}
    |}>
  |},
  +$refType: DogsList_viewer$ref,
|};
export type DogsList_viewer$data = DogsList_viewer;
export type DogsList_viewer$key = {
  +$data?: DogsList_viewer$data,
  +$fragmentRefs: DogsList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
// prettier-ignore
(node/*: any*/).hash = '9c2ec93f7f6dd04df198a4db71481abf';

module.exports = node;
