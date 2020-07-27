/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogCard_dog$ref = any;
export type DogsListQueryVariables = {||};
export type DogsListQueryResponse = {|
  +viewer: ?{|
    +dogs: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +$fragmentRefs: DogCard_dog$ref,
        |}
      |}>
    |}
  |}
|};
export type DogsListQuery = {|
  variables: DogsListQueryVariables,
  response: DogsListQueryResponse,
|};
*/


/*
query DogsListQuery {
  viewer {
    dogs {
      edges {
        node {
          id
          ...DogCard_dog
        }
      }
    }
    id
  }
}

fragment DogCard_dog on Dog {
  name
  picture
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
    "name": "DogsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserToDogConnection",
            "kind": "LinkedField",
            "name": "dogs",
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
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "DogCard_dog"
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
    "name": "DogsListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserToDogConnection",
            "kind": "LinkedField",
            "name": "dogs",
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
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "picture",
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
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "03632e92b2c928e1ac0d722c5f897035",
    "id": null,
    "metadata": {},
    "name": "DogsListQuery",
    "operationKind": "query",
    "text": "query DogsListQuery {\n  viewer {\n    dogs {\n      edges {\n        node {\n          id\n          ...DogCard_dog\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61450b39958ba7c8d9c689f4cd8a90b3';

module.exports = node;
