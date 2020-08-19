/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateDogInput = {
    name: string;
    picture?: string | null;
    clientMutationId?: string | null;
};
export type CreateDogMutationVariables = {
    input: CreateDogInput;
};
export type CreateDogMutationResponse = {
    readonly createDog: {
        readonly dogEdge: {
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly picture: string | null;
            } | null;
        };
        readonly viewer: {
            readonly id: string;
        };
    } | null;
};
export type CreateDogMutation = {
    readonly response: CreateDogMutationResponse;
    readonly variables: CreateDogMutationVariables;
};



/*
mutation CreateDogMutation(
  $input: CreateDogInput!
) {
  createDog(input: $input) {
    dogEdge {
      node {
        id
        name
        picture
      }
    }
    viewer {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDogPayload",
    "kind": "LinkedField",
    "name": "createDog",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserToDogEdge",
        "kind": "LinkedField",
        "name": "dogEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Dog",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateDogMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateDogMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a4a8a5c35614e75040c73a06ca4f32df",
    "id": null,
    "metadata": {},
    "name": "CreateDogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDogMutation(\n  $input: CreateDogInput!\n) {\n  createDog(input: $input) {\n    dogEdge {\n      node {\n        id\n        name\n        picture\n      }\n    }\n    viewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bb8feef4cc659b56bb74e3ccf1815136';
export default node;
