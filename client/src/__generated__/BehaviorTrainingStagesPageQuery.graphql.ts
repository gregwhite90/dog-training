/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingStagesPageQueryVariables = {
    id: string;
};
export type BehaviorTrainingStagesPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingStagesApp_behavior" | "BehaviorBreadcrumb_behavior">;
    } | null;
};
export type BehaviorTrainingStagesPageQuery = {
    readonly response: BehaviorTrainingStagesPageQueryResponse;
    readonly variables: BehaviorTrainingStagesPageQueryVariables;
};



/*
query BehaviorTrainingStagesPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...BehaviorTrainingStagesApp_behavior
    ...BehaviorBreadcrumb_behavior
    id
  }
}

fragment BehaviorBreadcrumb_behavior on Behavior {
  id
  name
  dog {
    name
    id
  }
}

fragment BehaviorTrainingStagesApp_behavior on Behavior {
  ...BehaviorTrainingStagesList_behavior
}

fragment BehaviorTrainingStagesList_behavior on Behavior {
  id
  trainingStages(first: 2147483647) {
    edges {
      node {
        id
        ...TrainingStageCard_trainingStage
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TrainingStageCard_trainingStage on TrainingStage {
  ...TrainingStageName_trainingStage
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

fragment TrainingStageName_trainingStage on TrainingStage {
  seq
  incentive
  behavior {
    incentive_method
    id
  }
  verbal
  hand
  reward_frequency
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v5 = {
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
    "name": "BehaviorTrainingStagesPageQuery",
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
            "name": "BehaviorTrainingStagesApp_behavior"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BehaviorBreadcrumb_behavior"
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
    "name": "BehaviorTrainingStagesPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "TrainingStageConnection",
                "kind": "LinkedField",
                "name": "trainingStages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrainingStageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
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
                          (v3/*: any*/),
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
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "verbal_command",
                                "storageKey": null
                              }
                            ],
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
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "trainingStages(first:2147483647)"
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "BehaviorTrainingStagesList_trainingStages",
                "kind": "LinkedHandle",
                "name": "trainingStages"
              },
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "dog",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Behavior",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a526bd7dc22f6a2a5fcd3ea0bc51fb12",
    "id": null,
    "metadata": {},
    "name": "BehaviorTrainingStagesPageQuery",
    "operationKind": "query",
    "text": "query BehaviorTrainingStagesPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BehaviorTrainingStagesApp_behavior\n    ...BehaviorBreadcrumb_behavior\n    id\n  }\n}\n\nfragment BehaviorBreadcrumb_behavior on Behavior {\n  id\n  name\n  dog {\n    name\n    id\n  }\n}\n\nfragment BehaviorTrainingStagesApp_behavior on Behavior {\n  ...BehaviorTrainingStagesList_behavior\n}\n\nfragment BehaviorTrainingStagesList_behavior on Behavior {\n  id\n  trainingStages(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...TrainingStageCard_trainingStage\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TrainingStageCard_trainingStage on TrainingStage {\n  ...TrainingStageName_trainingStage\n  incentive\n  verbal\n  hand\n  reward_frequency\n  behavior {\n    incentive_method\n    verbal_command\n    id\n  }\n}\n\nfragment TrainingStageName_trainingStage on TrainingStage {\n  seq\n  incentive\n  behavior {\n    incentive_method\n    id\n  }\n  verbal\n  hand\n  reward_frequency\n}\n"
  }
};
})();
(node as any).hash = '1bd764ddd252d2d9e2bb1d1253bdb9a8';
export default node;
