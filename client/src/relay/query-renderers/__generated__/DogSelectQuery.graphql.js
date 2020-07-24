/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DogSelectQueryVariables = {||};
export type DogSelectQueryResponse = {|
  +dogs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>
  |}
|};
export type DogSelectQuery = {|
  variables: DogSelectQueryVariables,
  response: DogSelectQueryResponse,
|};
*/


/*
query DogSelectQuery {
  dogs {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DogConnection",
    "kind": "LinkedField",
    "name": "dogs",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DogEdge",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DogSelectQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DogSelectQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "42f7f7b0f84fe00118d08d996ad017c2",
    "id": null,
    "metadata": {},
    "name": "DogSelectQuery",
    "operationKind": "query",
    "text": "query DogSelectQuery {\n  dogs {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0abc61de3ffa3cba7fbb9c7620ebef61';

module.exports = node;
