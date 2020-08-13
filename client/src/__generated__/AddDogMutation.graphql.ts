/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddDogInput = {
    name: string;
    picture?: string | null;
    clientMutationId?: string | null;
};
export type AddDogMutationVariables = {
    input: AddDogInput;
};
export type AddDogMutationResponse = {
    readonly addDog: {
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
export type AddDogMutation = {
    readonly response: AddDogMutationResponse;
    readonly variables: AddDogMutationVariables;
};



/*
mutation AddDogMutation(
  $input: AddDogInput!
) {
  addDog(input: $input) {
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
    "concreteType": "AddDogPayload",
    "kind": "LinkedField",
    "name": "addDog",
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
    "name": "AddDogMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddDogMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "630c2fc875e9597c41686a3206448ee9",
    "id": null,
    "metadata": {},
    "name": "AddDogMutation",
    "operationKind": "mutation",
    "text": "mutation AddDogMutation(\n  $input: AddDogInput!\n) {\n  addDog(input: $input) {\n    dogEdge {\n      node {\n        id\n        name\n        picture\n      }\n    }\n    viewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '598c53efed28337680ae793fc6f02ac6';
export default node;
