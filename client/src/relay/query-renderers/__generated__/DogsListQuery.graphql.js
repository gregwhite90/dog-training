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
    dogs(first: 2147483647) {
      edges {
        node {
          id
          ...DogCard_dog
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
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
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
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
            "alias": "dogs",
            "args": null,
            "concreteType": "UserToDogConnection",
            "kind": "LinkedField",
            "name": "__DogList_dogs_connection",
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
                      (v1/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "DogCard_dog"
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
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
            "args": (v4/*: any*/),
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
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "dogs(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "DogList_dogs",
            "kind": "LinkedHandle",
            "name": "dogs"
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d5efafcc5df186579c6ed8f78e23010f",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "viewer",
            "dogs"
          ]
        }
      ]
    },
    "name": "DogsListQuery",
    "operationKind": "query",
    "text": "query DogsListQuery {\n  viewer {\n    dogs(first: 2147483647) {\n      edges {\n        node {\n          id\n          ...DogCard_dog\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0821b9d5f6376470f8095aef54dda892';

module.exports = node;
