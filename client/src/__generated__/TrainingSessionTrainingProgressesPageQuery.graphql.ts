/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionTrainingProgressesPageQueryVariables = {
    id: string;
};
export type TrainingSessionTrainingProgressesPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingSessionTrainingProgressesApp_trainingSession" | "TrainingSessionBreadcrumb_trainingSession">;
    } | null;
};
export type TrainingSessionTrainingProgressesPageQuery = {
    readonly response: TrainingSessionTrainingProgressesPageQueryResponse;
    readonly variables: TrainingSessionTrainingProgressesPageQueryVariables;
};



/*
query TrainingSessionTrainingProgressesPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TrainingSessionTrainingProgressesApp_trainingSession
    ...TrainingSessionBreadcrumb_trainingSession
    id
  }
}

fragment BehaviorName_behavior on Behavior {
  name
}

fragment TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge on TrainingSessionToTrainingStageEdge {
  seq
  successes
  attempts
  distance
  distractions
  duration
  node {
    id
    ...TrainingStageName_trainingStage
    behavior {
      id
      ...BehaviorName_behavior
    }
  }
}

fragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {
  id
  dog {
    name
    id
  }
  ...TrainingSessionName_trainingSession
}

fragment TrainingSessionName_trainingSession on TrainingSession {
  start_timestamp
  minutes_long
}

fragment TrainingSessionTrainingProgressesApp_trainingSession on TrainingSession {
  id
  dog {
    id
    name
  }
  ...TrainingSessionTrainingProgressesList_trainingSession
  ...TrainingSessionName_trainingSession
}

fragment TrainingSessionTrainingProgressesList_trainingSession on TrainingSession {
  id
  ...TrainingSessionName_trainingSession
  trainingStages(first: 2147483647) {
    edges {
      seq
      ...TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v6 = {
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
    "name": "TrainingSessionTrainingProgressesPageQuery",
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
            "name": "TrainingSessionTrainingProgressesApp_trainingSession"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TrainingSessionBreadcrumb_trainingSession"
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
    "name": "TrainingSessionTrainingProgressesPageQuery",
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
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "dog",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
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
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "TrainingSessionToTrainingStageConnection",
                "kind": "LinkedField",
                "name": "trainingStages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrainingSessionToTrainingStageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrainingStage",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v6/*: any*/),
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
                              (v4/*: any*/)
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
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "TrainingSessionTrainingProgressesList_trainingStages",
                "kind": "LinkedHandle",
                "name": "trainingStages"
              }
            ],
            "type": "TrainingSession",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7de1a5b5aaa520958139c19bafd633f3",
    "id": null,
    "metadata": {},
    "name": "TrainingSessionTrainingProgressesPageQuery",
    "operationKind": "query",
    "text": "query TrainingSessionTrainingProgressesPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingSessionTrainingProgressesApp_trainingSession\n    ...TrainingSessionBreadcrumb_trainingSession\n    id\n  }\n}\n\nfragment BehaviorName_behavior on Behavior {\n  name\n}\n\nfragment TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge on TrainingSessionToTrainingStageEdge {\n  seq\n  successes\n  attempts\n  distance\n  distractions\n  duration\n  node {\n    id\n    ...TrainingStageName_trainingStage\n    behavior {\n      id\n      ...BehaviorName_behavior\n    }\n  }\n}\n\nfragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {\n  id\n  dog {\n    name\n    id\n  }\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n\nfragment TrainingSessionTrainingProgressesApp_trainingSession on TrainingSession {\n  id\n  dog {\n    id\n    name\n  }\n  ...TrainingSessionTrainingProgressesList_trainingSession\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionTrainingProgressesList_trainingSession on TrainingSession {\n  id\n  ...TrainingSessionName_trainingSession\n  trainingStages(first: 2147483647) {\n    edges {\n      seq\n      ...TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TrainingStageName_trainingStage on TrainingStage {\n  seq\n  incentive\n  behavior {\n    incentive_method\n    id\n  }\n  verbal\n  hand\n  reward_frequency\n}\n"
  }
};
})();
(node as any).hash = 'bb35dd7e57c6c86b5875bac6e5d37497';
export default node;
