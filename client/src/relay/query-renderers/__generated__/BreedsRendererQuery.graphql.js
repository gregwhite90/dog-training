/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BreedName_breed$ref = any;
export type BreedsRendererQueryVariables = {||};
export type BreedsRendererQueryResponse = {|
  +breeds: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: BreedName_breed$ref,
      |}
    |}>
  |}
|};
export type BreedsRendererQuery = {|
  variables: BreedsRendererQueryVariables,
  response: BreedsRendererQueryResponse,
|};
*/


/*
query BreedsRendererQuery {
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
    "name": "BreedsRendererQuery",
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
    "name": "BreedsRendererQuery",
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
    "cacheID": "f71b793a03268393a04d9b623f8ea2c4",
    "id": null,
    "metadata": {},
    "name": "BreedsRendererQuery",
    "operationKind": "query",
    "text": "query BreedsRendererQuery {\n  breeds {\n    edges {\n      node {\n        id\n        ...BreedName_breed\n      }\n    }\n  }\n}\n\nfragment BreedName_breed on Breed {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cdce061e944ed527e0077f44d5a62087';

module.exports = node;
