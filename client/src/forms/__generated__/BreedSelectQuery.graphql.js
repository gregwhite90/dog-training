/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BreedName_breed$ref = any;
export type BreedSelectQueryVariables = {||};
export type BreedSelectQueryResponse = {|
  +breeds: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: BreedName_breed$ref,
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
        ...BreedName_breed
      }
    }
  }
}

fragment BreedName_breed on Breed {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BreedSelectQuery",
    "selections": [
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
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "BreedName_breed"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BreedSelectQuery",
    "selections": [
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
                  (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "76b3504ed79d0456de265b2703efd17c",
    "id": null,
    "metadata": {},
    "name": "BreedSelectQuery",
    "operationKind": "query",
    "text": "query BreedSelectQuery {\n  breeds {\n    edges {\n      node {\n        id\n        ...BreedName_breed\n      }\n    }\n  }\n}\n\nfragment BreedName_breed on Breed {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce2a944bcbcc657c162094b7b807aad9';

module.exports = node;
