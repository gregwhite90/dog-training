/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BreedSelectQueryVariables = {||};
export type BreedSelectQueryResponse = {|
  +breeds: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>
  |}
|};
export type BreedSelectQuery = {|
  variables: BreedSelectQueryVariables,
  response: BreedSelectQueryResponse,
|};
*/


/*
query BreedSelectQuery {
  breeds {
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
    "concreteType": "BreedConnection",
    "kind": "LinkedField",
    "name": "breeds",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BreedEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Breed",
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
    "name": "BreedSelectQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BreedSelectQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d7c31847d4306f4071d1d88dc1c5aabf",
    "id": null,
    "metadata": {},
    "name": "BreedSelectQuery",
    "operationKind": "query",
    "text": "query BreedSelectQuery {\n  breeds {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cee18de1f285ee4680fe01aca062e823';

module.exports = node;
