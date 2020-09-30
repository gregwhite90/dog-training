/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EditDogInput = {
    id: string;
    name?: string | null;
    picture?: string | null;
    clientMutationId?: string | null;
};
export type EditDogMutationVariables = {
    input: EditDogInput;
};
export type EditDogMutationResponse = {
    readonly editDog: {
        readonly dog: {
            readonly id: string;
            readonly name: string;
            readonly picture: string | null;
        };
    } | null;
};
export type EditDogMutation = {
    readonly response: EditDogMutationResponse;
    readonly variables: EditDogMutationVariables;
};



/*
mutation EditDogMutation(
  $input: EditDogInput!
) {
  editDog(input: $input) {
    dog {
      id
      name
      picture
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "EditDogPayload",
    "kind": "LinkedField",
    "name": "editDog",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Dog",
        "kind": "LinkedField",
        "name": "dog",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditDogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditDogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3cc6613d82f02e1b0679c3a1413bd00d",
    "id": null,
    "metadata": {},
    "name": "EditDogMutation",
    "operationKind": "mutation",
    "text": "mutation EditDogMutation(\n  $input: EditDogInput!\n) {\n  editDog(input: $input) {\n    dog {\n      id\n      name\n      picture\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a7dfb0cb4fc33f61f8bc565486211986';
export default node;
