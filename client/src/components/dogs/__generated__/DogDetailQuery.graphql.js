/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateBehaviorForm_dog$ref = any;
type DogCard_dog$ref = any;
type InviteUserByEmailForm_dog$ref = any;
export type DogDetailQueryVariables = {|
  id: string
|};
export type DogDetailQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: DogCard_dog$ref & InviteUserByEmailForm_dog$ref & CreateBehaviorForm_dog$ref
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
    ...CreateBehaviorForm_dog
    id
  }
}

fragment CreateBehaviorForm_dog on Dog {
  id
  name
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateBehaviorForm_dog"
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
    "cacheID": "4405683c4f455396fe7e672b51809025",
    "id": null,
    "metadata": {},
    "name": "DogDetailQuery",
    "operationKind": "query",
    "text": "query DogDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogCard_dog\n    ...InviteUserByEmailForm_dog\n    ...CreateBehaviorForm_dog\n    id\n  }\n}\n\nfragment CreateBehaviorForm_dog on Dog {\n  id\n  name\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n\nfragment InviteUserByEmailForm_dog on Dog {\n  id\n  name\n  picture\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f203016ce3db40500fce03a3b663bea3';

module.exports = node;
