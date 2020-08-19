/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateBehaviorInput = {
    dog_id: string;
    name: string;
    explanation?: string | null;
    lure_description?: string | null;
    shape_description?: string | null;
    verbal_command?: string | null;
    hand_signal?: string | null;
    has_duration: boolean;
    release_command?: string | null;
    clientMutationId?: string | null;
};
export type CreateBehaviorMutationVariables = {
    input: CreateBehaviorInput;
};
export type CreateBehaviorMutationResponse = {
    readonly createBehavior: {
        readonly behaviorEdge: {
            readonly node: {
                readonly id: string;
                readonly name: string;
            } | null;
        };
    } | null;
};
export type CreateBehaviorMutation = {
    readonly response: CreateBehaviorMutationResponse;
    readonly variables: CreateBehaviorMutationVariables;
};



/*
mutation CreateBehaviorMutation(
  $input: CreateBehaviorInput!
) {
  createBehavior(input: $input) {
    behaviorEdge {
      node {
        id
        name
      }
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
    "concreteType": "CreateBehaviorPayload",
    "kind": "LinkedField",
    "name": "createBehavior",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BehaviorEdge",
        "kind": "LinkedField",
        "name": "behaviorEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Behavior",
            "kind": "LinkedField",
            "name": "node",
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
              }
            ],
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
    "name": "CreateBehaviorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateBehaviorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4cc40c802413f5230df03ecf885f3e5e",
    "id": null,
    "metadata": {},
    "name": "CreateBehaviorMutation",
    "operationKind": "mutation",
    "text": "mutation CreateBehaviorMutation(\n  $input: CreateBehaviorInput!\n) {\n  createBehavior(input: $input) {\n    behaviorEdge {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c8b788eeff3edb66d890ea6ee064b051';
export default node;
