/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BreedDisplay_breed$ref = any;
export type BreedsRendererQueryVariables = {||};
export type BreedsRendererQueryResponse = {|
  +breeds: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: BreedDisplay_breed$ref,
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
        ...BreedDisplay_breed
      }
    }
  }
}

fragment BreedDisplay_breed on Breed {
  name
  infoUrl
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
                    "name": "BreedDisplay_breed"
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "infoUrl",
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
    "cacheID": "f46d5ddee1edcfeff472dae2b0a238e0",
    "id": null,
    "metadata": {},
    "name": "BreedsRendererQuery",
    "operationKind": "query",
    "text": "query BreedsRendererQuery {\n  breeds {\n    edges {\n      node {\n        id\n        ...BreedDisplay_breed\n      }\n    }\n  }\n}\n\nfragment BreedDisplay_breed on Breed {\n  name\n  infoUrl\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f1499ddcacee83150427c3f3f64fa67';

module.exports = node;
