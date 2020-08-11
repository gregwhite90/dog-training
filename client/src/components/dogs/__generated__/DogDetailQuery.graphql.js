/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogCard_dog$ref = any;
type InviteUserByEmailForm_dog$ref = any;
export type DogDetailQueryVariables = {|
  id: string
|};
export type DogDetailQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: DogCard_dog$ref & InviteUserByEmailForm_dog$ref
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
    ...InviteUserByEmailForm_dog
    id
  }
}

fragment DogCard_dog on Dog {
  name
  picture
}

fragment InviteUserByEmailForm_dog on Dog {
  id
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InviteUserByEmailForm_dog"
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
    "cacheID": "1b7570a3fc18e07d545731697ceaf790",
    "id": null,
    "metadata": {},
    "name": "DogDetailQuery",
    "operationKind": "query",
    "text": "query DogDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogCard_dog\n    ...InviteUserByEmailForm_dog\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n\nfragment InviteUserByEmailForm_dog on Dog {\n  id\n  name\n  picture\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75d010f6aac215f434d6ea002ff044bd';

module.exports = node;
