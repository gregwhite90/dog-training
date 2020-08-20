/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogDetailQueryVariables = {
    id: string;
};
export type DogDetailQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"DogCard_dog" | "InviteUserByEmailForm_dog" | "DogBreadcrumb_dog">;
    } | null;
};
export type DogDetailQuery = {
    readonly response: DogDetailQueryResponse;
    readonly variables: DogDetailQueryVariables;
};



/*
query DogDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...DogCard_dog
    ...InviteUserByEmailForm_dog
    ...DogBreadcrumb_dog
    id
  }
}

fragment DogBreadcrumb_dog on Dog {
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
            "name": "DogBreadcrumb_dog"
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
    "cacheID": "fe175731ac1b390400107c4ed7a4f4fa",
    "id": null,
    "metadata": {},
    "name": "DogDetailQuery",
    "operationKind": "query",
    "text": "query DogDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogCard_dog\n    ...InviteUserByEmailForm_dog\n    ...DogBreadcrumb_dog\n    id\n  }\n}\n\nfragment DogBreadcrumb_dog on Dog {\n  id\n  name\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n\nfragment InviteUserByEmailForm_dog on Dog {\n  id\n  name\n  picture\n}\n"
  }
};
})();
(node as any).hash = '6decc316ee4aec310967e0ef1b4be81b';
export default node;
