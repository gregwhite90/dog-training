/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageDetailQueryVariables = {
    id: string;
};
export type TrainingStageDetailQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingStageCard_trainingStage" | "TrainingStageBreadcrumb_trainingStage">;
    } | null;
};
export type TrainingStageDetailQuery = {
    readonly response: TrainingStageDetailQueryResponse;
    readonly variables: TrainingStageDetailQueryVariables;
};



/*
query TrainingStageDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TrainingStageCard_trainingStage
    ...TrainingStageBreadcrumb_trainingStage
    id
  }
}

fragment TrainingStageBreadcrumb_trainingStage on TrainingStage {
  id
  seq
  behavior {
    name
    id
    dog {
      id
      name
    }
  }
}

fragment TrainingStageCard_trainingStage on TrainingStage {
  seq
  incentive
  verbal
  hand
  reward_frequency
  behavior {
    incentive_method
    verbal_command
    id
  }
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TrainingStageDetailQuery",
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
            "name": "TrainingStageCard_trainingStage"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TrainingStageBreadcrumb_trainingStage"
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
    "name": "TrainingStageDetailQuery",
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
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
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
                "name": "incentive",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "verbal",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hand",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reward_frequency",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Behavior",
                "kind": "LinkedField",
                "name": "behavior",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "incentive_method",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "verbal_command",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Dog",
                    "kind": "LinkedField",
                    "name": "dog",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "TrainingStage",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c6a5285efa88c21858ebb0ce6e65ef7",
    "id": null,
    "metadata": {},
    "name": "TrainingStageDetailQuery",
    "operationKind": "query",
    "text": "query TrainingStageDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingStageCard_trainingStage\n    ...TrainingStageBreadcrumb_trainingStage\n    id\n  }\n}\n\nfragment TrainingStageBreadcrumb_trainingStage on TrainingStage {\n  id\n  seq\n  behavior {\n    name\n    id\n    dog {\n      id\n      name\n    }\n  }\n}\n\nfragment TrainingStageCard_trainingStage on TrainingStage {\n  seq\n  incentive\n  verbal\n  hand\n  reward_frequency\n  behavior {\n    incentive_method\n    verbal_command\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e02892fc12e07dd7b59c09514def8295';
export default node;
