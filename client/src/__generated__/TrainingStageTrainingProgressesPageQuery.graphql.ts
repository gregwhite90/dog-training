/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageTrainingProgressesPageQueryVariables = {
    id: string;
};
export type TrainingStageTrainingProgressesPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingStageTrainingProgressesApp_trainingStage" | "TrainingStageBreadcrumb_trainingStage">;
    } | null;
};
export type TrainingStageTrainingProgressesPageQuery = {
    readonly response: TrainingStageTrainingProgressesPageQueryResponse;
    readonly variables: TrainingStageTrainingProgressesPageQueryVariables;
};



/*
query TrainingStageTrainingProgressesPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TrainingStageTrainingProgressesApp_trainingStage
    ...TrainingStageBreadcrumb_trainingStage
    id
  }
}

fragment BehaviorName_behavior on Behavior {
  name
}

fragment TrainingProgressDisplay_trainingProgress on TrainingProgress {
  seq
  successes
  attempts
  distance
  distractions
  duration
}

fragment TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge on TrainingStageToTrainingSessionEdge {
  training_progress {
    ...TrainingProgressDisplay_trainingProgress
  }
  node {
    id
    ...TrainingSessionName_trainingSession
  }
}

fragment TrainingSessionName_trainingSession on TrainingSession {
  start_timestamp
  minutes_long
}

fragment TrainingStageBreadcrumb_trainingStage on TrainingStage {
  id
  ...TrainingStageName_trainingStage
  behavior {
    name
    id
    dog {
      id
      name
    }
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

fragment TrainingStageTrainingProgressesApp_trainingStage on TrainingStage {
  id
  behavior {
    id
    ...BehaviorName_behavior
  }
  ...TrainingStageTrainingProgressesList_trainingStage
  ...TrainingStageName_trainingStage
}

fragment TrainingStageTrainingProgressesList_trainingStage on TrainingStage {
  id
  ...TrainingStageName_trainingStage
  behavior {
    id
    ...BehaviorName_behavior
  }
  trainingSessions(first: 2147483647) {
    edges {
      training_progress {
        seq
      }
      ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seq",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TrainingStageTrainingProgressesPageQuery",
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
            "name": "TrainingStageTrainingProgressesApp_trainingStage"
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
    "name": "TrainingStageTrainingProgressesPageQuery",
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
                "args": null,
                "concreteType": "Behavior",
                "kind": "LinkedField",
                "name": "behavior",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                    "concreteType": "Dog",
                    "kind": "LinkedField",
                    "name": "dog",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/),
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
                "args": (v6/*: any*/),
                "concreteType": "TrainingStageToTrainingSessionConnection",
                "kind": "LinkedField",
                "name": "trainingSessions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrainingStageToTrainingSessionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrainingProgress",
                        "kind": "LinkedField",
                        "name": "training_progress",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrainingSession",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
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
                "storageKey": "trainingSessions(first:2147483647)"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "TrainingStageTrainingProgressesList_trainingSessions",
                "kind": "LinkedHandle",
                "name": "trainingSessions"
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
    "cacheID": "c397985d8ed869108363d1e00e3723ac",
    "id": null,
    "metadata": {},
    "name": "TrainingStageTrainingProgressesPageQuery",
    "operationKind": "query",
    "text": "query TrainingStageTrainingProgressesPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingStageTrainingProgressesApp_trainingStage\n    ...TrainingStageBreadcrumb_trainingStage\n    id\n  }\n}\n\nfragment BehaviorName_behavior on Behavior {\n  name\n}\n\nfragment TrainingProgressDisplay_trainingProgress on TrainingProgress {\n  seq\n  successes\n  attempts\n  distance\n  distractions\n  duration\n}\n\nfragment TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge on TrainingStageToTrainingSessionEdge {\n  training_progress {\n    ...TrainingProgressDisplay_trainingProgress\n  }\n  node {\n    id\n    ...TrainingSessionName_trainingSession\n  }\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n\nfragment TrainingStageBreadcrumb_trainingStage on TrainingStage {\n  id\n  ...TrainingStageName_trainingStage\n  behavior {\n    name\n    id\n    dog {\n      id\n      name\n    }\n  }\n}\n\nfragment TrainingStageName_trainingStage on TrainingStage {\n  seq\n  incentive\n  behavior {\n    incentive_method\n    id\n  }\n  verbal\n  hand\n  reward_frequency\n}\n\nfragment TrainingStageTrainingProgressesApp_trainingStage on TrainingStage {\n  id\n  behavior {\n    id\n    ...BehaviorName_behavior\n  }\n  ...TrainingStageTrainingProgressesList_trainingStage\n  ...TrainingStageName_trainingStage\n}\n\nfragment TrainingStageTrainingProgressesList_trainingStage on TrainingStage {\n  id\n  ...TrainingStageName_trainingStage\n  behavior {\n    id\n    ...BehaviorName_behavior\n  }\n  trainingSessions(first: 2147483647) {\n    edges {\n      training_progress {\n        seq\n      }\n      ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5c344034d7bcbc127dba8148656b732d';
export default node;
