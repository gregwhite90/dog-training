/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RewardFrequency = "CONTINUOUS" | "INTERMITTENT" | "%future added value";
export type CreateTrainingStagesInput = {
    behavior_id: string;
    training_stages: Array<TrainingStageScalarFields>;
    clientMutationId?: string | null;
};
export type TrainingStageScalarFields = {
    seq: number;
    incentive: boolean;
    verbal: boolean;
    hand: boolean;
    reward_frequency?: RewardFrequency | null;
};
export type CreateTrainingStagesMutationVariables = {
    input: CreateTrainingStagesInput;
};
export type CreateTrainingStagesMutationResponse = {
    readonly createTrainingStages: {
        readonly trainingStageEdges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        }>;
    } | null;
};
export type CreateTrainingStagesMutation = {
    readonly response: CreateTrainingStagesMutationResponse;
    readonly variables: CreateTrainingStagesMutationVariables;
};



/*
mutation CreateTrainingStagesMutation(
  $input: CreateTrainingStagesInput!
) {
  createTrainingStages(input: $input) {
    trainingStageEdges {
      node {
        id
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
    "concreteType": "CreateTrainingStagesPayload",
    "kind": "LinkedField",
    "name": "createTrainingStages",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrainingStageEdge",
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
    "name": "CreateTrainingStagesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTrainingStagesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "69419849cb77ac9a2119e567bd0a15ac",
    "id": null,
    "metadata": {},
    "name": "CreateTrainingStagesMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTrainingStagesMutation(\n  $input: CreateTrainingStagesInput!\n) {\n  createTrainingStages(input: $input) {\n    trainingStageEdges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5dc75fa3d8dd15b8eabb0b368b6ce15a';
export default node;
