/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QualitativeLevel = "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type CreateTrainingProgressesInput = {
    training_session_id: string;
    training_progresses: Array<TrainingProgressInput>;
    clientMutationId?: string | null;
};
export type TrainingProgressInput = {
    training_stage_id: string;
    seq: number;
    successes?: number | null;
    attempts?: number | null;
    distance?: QualitativeLevel | null;
    distractions?: QualitativeLevel | null;
    duration?: QualitativeLevel | null;
};
export type CreateTrainingProgressesMutationVariables = {
    input: CreateTrainingProgressesInput;
};
export type CreateTrainingProgressesMutationResponse = {
    readonly createTrainingProgresses: {
        readonly trainingStageEdges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
            readonly training_progress: {
                readonly seq: number;
                readonly successes: number | null;
                readonly attempts: number | null;
                readonly distance: QualitativeLevel | null;
                readonly distractions: QualitativeLevel | null;
                readonly duration: QualitativeLevel | null;
            };
        }>;
    } | null;
};
export type CreateTrainingProgressesMutation = {
    readonly response: CreateTrainingProgressesMutationResponse;
    readonly variables: CreateTrainingProgressesMutationVariables;
};



/*
mutation CreateTrainingProgressesMutation(
  $input: CreateTrainingProgressesInput!
) {
  createTrainingProgresses(input: $input) {
    trainingStageEdges {
      node {
        id
      }
      training_progress {
        seq
        successes
        attempts
        distance
        distractions
        duration
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
    "concreteType": "CreateTrainingProgressesPayload",
    "kind": "LinkedField",
    "name": "createTrainingProgresses",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrainingSessionToTrainingStageEdge",
        "kind": "LinkedField",
        "name": "trainingStageEdges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrainingStage",
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
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TrainingProgress",
            "kind": "LinkedField",
            "name": "training_progress",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "seq",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "successes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "attempts",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "distance",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "distractions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "duration",
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
    "name": "CreateTrainingProgressesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTrainingProgressesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b3ac8274f774bbe941ca234a21f36e41",
    "id": null,
    "metadata": {},
    "name": "CreateTrainingProgressesMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTrainingProgressesMutation(\n  $input: CreateTrainingProgressesInput!\n) {\n  createTrainingProgresses(input: $input) {\n    trainingStageEdges {\n      node {\n        id\n      }\n      training_progress {\n        seq\n        successes\n        attempts\n        distance\n        distractions\n        duration\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '69f06c1f02336e6a697ce0754902b501';
export default node;
