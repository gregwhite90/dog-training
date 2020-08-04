/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogCard_dog$ref = any;
export type DogDetailQueryVariables = {|
  id: string
|};
export type DogDetailQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: DogCard_dog$ref
  |}
|};
export type DogDetailQuery = {|
  variables: DogDetailQueryVariables,
  response: DogDetailQueryResponse,
|};
*/


/*
query DogDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...DogCard_dog
    id
  }
}

fragment DogCard_dog on Dog {
  name
  picture
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DogDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DogCard_dog"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DogDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
            "type": "Dog",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ec9e91a8f1e4d7f7c95f7f4990dc92aa",
    "id": null,
    "metadata": {},
    "name": "DogDetailQuery",
    "operationKind": "query",
    "text": "query DogDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogCard_dog\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f649c93454e029c9db1fbc562881d21';

module.exports = node;
