/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateTrainingSessionInput = {
    user_id: string;
    dog_id: string;
    minutes_long?: number | null;
    start_timestamp: unknown;
    clientMutationId?: string | null;
};
export type CreateTrainingSessionMutationVariables = {
    input: CreateTrainingSessionInput;
};
export type CreateTrainingSessionMutationResponse = {
    readonly createTrainingSession: {
        readonly trainingSessionEdge: {
            readonly node: {
                readonly id: string;
                readonly start_timestamp: unknown;
                readonly minutes_long: number | null;
            } | null;
        } | null;
    } | null;
};
export type CreateTrainingSessionMutation = {
    readonly response: CreateTrainingSessionMutationResponse;
    readonly variables: CreateTrainingSessionMutationVariables;
};



/*
mutation CreateTrainingSessionMutation(
  $input: CreateTrainingSessionInput!
) {
  createTrainingSession(input: $input) {
    trainingSessionEdge {
      node {
        id
        start_timestamp
        minutes_long
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
    "concreteType": "CreateTrainingSessionPayload",
    "kind": "LinkedField",
    "name": "createTrainingSession",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrainingSessionEdge",
        "kind": "LinkedField",
        "name": "trainingSessionEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrainingSession",
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
                "name": "start_timestamp",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "minutes_long",
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
    "name": "CreateTrainingSessionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTrainingSessionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a88520e4c14419c21ec0e306d47398dc",
    "id": null,
    "metadata": {},
    "name": "CreateTrainingSessionMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTrainingSessionMutation(\n  $input: CreateTrainingSessionInput!\n) {\n  createTrainingSession(input: $input) {\n    trainingSessionEdge {\n      node {\n        id\n        start_timestamp\n        minutes_long\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0787710b5a29840f6b0038ab99751700';
export default node;
