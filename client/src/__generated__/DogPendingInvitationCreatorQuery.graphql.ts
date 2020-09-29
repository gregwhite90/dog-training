/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogPendingInvitationCreatorQueryVariables = {
    id: string;
};
export type DogPendingInvitationCreatorQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"DogBreadcrumb_dog" | "InviteUserByEmailForm_dog">;
    } | null;
};
export type DogPendingInvitationCreatorQuery = {
    readonly response: DogPendingInvitationCreatorQueryResponse;
    readonly variables: DogPendingInvitationCreatorQueryVariables;
};



/*
query DogPendingInvitationCreatorQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...DogBreadcrumb_dog
    ...InviteUserByEmailForm_dog
    id
  }
}

fragment DogBreadcrumb_dog on Dog {
  id
  name
}

fragment InviteUserByEmailForm_dog on Dog {
  id
  name
  picture
}
*/

const node: ConcreteRequest = (function(){
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
    "name": "DogPendingInvitationCreatorQuery",
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
            "name": "DogBreadcrumb_dog"
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
    "name": "DogPendingInvitationCreatorQuery",
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
    "cacheID": "5dba6f0ceb04a5eea958f9af45cf0fac",
    "id": null,
    "metadata": {},
    "name": "DogPendingInvitationCreatorQuery",
    "operationKind": "query",
    "text": "query DogPendingInvitationCreatorQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogBreadcrumb_dog\n    ...InviteUserByEmailForm_dog\n    id\n  }\n}\n\nfragment DogBreadcrumb_dog on Dog {\n  id\n  name\n}\n\nfragment InviteUserByEmailForm_dog on Dog {\n  id\n  name\n  picture\n}\n"
  }
};
})();
(node as any).hash = '6ab1a8692fabae6fd6cc9c5bf58a565d';
export default node;
