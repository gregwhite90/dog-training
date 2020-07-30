/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogsApp_viewer$ref = any;
export type DogsPageQueryVariables = {||};
export type DogsPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: DogsApp_viewer$ref
  |}
|};
export type DogsPageQuery = {|
  variables: DogsPageQueryVariables,
  response: DogsPageQueryResponse,
|};
*/


/*
query DogsPageQuery {
  viewer {
    ...DogsApp_viewer
    id
  }
}

fragment DogCard_dog on Dog {
  name
  picture
}

fragment DogsApp_viewer on User {
  id
  ...DogsList_viewer
}

fragment DogsList_viewer on User {
  id
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
v1 = [
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
    "name": "DogsPageQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "DogsApp_viewer"
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
    "name": "DogsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
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
            "storageKey": "dogs(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "DogsList_dogs",
            "kind": "LinkedHandle",
            "name": "dogs"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f0707bd14bb4bfa5736c13dea15c92e9",
    "id": null,
    "metadata": {},
    "name": "DogsPageQuery",
    "operationKind": "query",
    "text": "query DogsPageQuery {\n  viewer {\n    ...DogsApp_viewer\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n\nfragment DogsApp_viewer on User {\n  id\n  ...DogsList_viewer\n}\n\nfragment DogsList_viewer on User {\n  id\n  dogs(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...DogCard_dog\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce6f7dbe1002ccfb66ed56261aabaf0d';

module.exports = node;
