/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorTrainingProgressesPageQueryVariables = {
    id: string;
};
export type BehaviorTrainingProgressesPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"BehaviorTrainingProgressesApp_behavior" | "BehaviorBreadcrumb_behavior">;
    } | null;
};
export type BehaviorTrainingProgressesPageQuery = {
    readonly response: BehaviorTrainingProgressesPageQueryResponse;
    readonly variables: BehaviorTrainingProgressesPageQueryVariables;
};



/*
query BehaviorTrainingProgressesPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...BehaviorTrainingProgressesApp_behavior
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

fragment BehaviorName_behavior on Behavior {
  name
}

fragment BehaviorTrainingProgressesApp_behavior on Behavior {
  ...BehaviorTrainingProgressesList_behavior
}

fragment BehaviorTrainingProgressesList_behavior on Behavior {
  id
  ...BehaviorName_behavior
  trainingStages(first: 2147483647) {
    edges {
      node {
        id
        ...TrainingStageName_trainingStage
        trainingSessions(first: 2147483647) {
          edges {
            training_progress {
              seq
            }
            ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
          }
        }
      }
    }
  }
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "seq",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BehaviorTrainingProgressesPageQuery",
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
            "name": "BehaviorTrainingProgressesApp_behavior"
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
    "name": "BehaviorTrainingProgressesPageQuery",
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
              (v3/*: any*/),
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
                          (v2/*: any*/),
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
                              (v2/*: any*/)
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
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
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
                                      (v2/*: any*/),
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
                            "storageKey": "trainingSessions(first:2147483647)"
                          }
                        ],
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
                "args": null,
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "dog",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
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
    "cacheID": "ebb871d35b4e14a787bab62c775a52f8",
    "id": null,
    "metadata": {},
    "name": "BehaviorTrainingProgressesPageQuery",
    "operationKind": "query",
    "text": "query BehaviorTrainingProgressesPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BehaviorTrainingProgressesApp_behavior\n    ...BehaviorBreadcrumb_behavior\n    id\n  }\n}\n\nfragment BehaviorBreadcrumb_behavior on Behavior {\n  id\n  name\n  dog {\n    name\n    id\n  }\n}\n\nfragment BehaviorName_behavior on Behavior {\n  name\n}\n\nfragment BehaviorTrainingProgressesApp_behavior on Behavior {\n  ...BehaviorTrainingProgressesList_behavior\n}\n\nfragment BehaviorTrainingProgressesList_behavior on Behavior {\n  id\n  ...BehaviorName_behavior\n  trainingStages(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...TrainingStageName_trainingStage\n        trainingSessions(first: 2147483647) {\n          edges {\n            training_progress {\n              seq\n            }\n            ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment TrainingProgressDisplay_trainingProgress on TrainingProgress {\n  seq\n  successes\n  attempts\n  distance\n  distractions\n  duration\n}\n\nfragment TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge on TrainingStageToTrainingSessionEdge {\n  training_progress {\n    ...TrainingProgressDisplay_trainingProgress\n  }\n  node {\n    id\n    ...TrainingSessionName_trainingSession\n  }\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n\nfragment TrainingStageName_trainingStage on TrainingStage {\n  seq\n  incentive\n  behavior {\n    incentive_method\n    id\n  }\n  verbal\n  hand\n  reward_frequency\n}\n"
  }
};
})();
(node as any).hash = '515e95a5cee26f0087e2e2185f77f3b8';
export default node;
