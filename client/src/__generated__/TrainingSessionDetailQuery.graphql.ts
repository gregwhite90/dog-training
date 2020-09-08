/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionDetailQueryVariables = {
    id: string;
};
export type TrainingSessionDetailQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingSessionCard_trainingSession" | "TrainingSessionBreadcrumb_trainingSession" | "TrainingSessionTrainingProgressesList_trainingSession">;
    } | null;
};
export type TrainingSessionDetailQuery = {
    readonly response: TrainingSessionDetailQueryResponse;
    readonly variables: TrainingSessionDetailQueryVariables;
};



/*
query TrainingSessionDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TrainingSessionCard_trainingSession
    ...TrainingSessionBreadcrumb_trainingSession
    ...TrainingSessionTrainingProgressesList_trainingSession
    id
  }
}

fragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {
  id
  start_timestamp
  dog {
    name
    id
  }
}

fragment TrainingSessionCard_trainingSession on TrainingSession {
  start_timestamp
  minutes_long
  dog {
    id
    name
  }
}

fragment TrainingSessionTrainingProgressesList_trainingSession on TrainingSession {
  id
  trainingStages(first: 2147483647) {
    edges {
      node {
        id
        __typename
      }
      seq
      successes
      attempts
      distance
      distractions
      duration
      cursor
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
v4 = [
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
    "name": "TrainingSessionDetailQuery",
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
            "name": "TrainingSessionCard_trainingSession"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TrainingSessionBreadcrumb_trainingSession"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TrainingSessionTrainingProgressesList_trainingSession"
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
    "name": "TrainingSessionDetailQuery",
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
                "args": null,
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "dog",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrainingStage",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
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
    "cacheID": "3e56a8b81b313ef4566be83ced102539",
    "id": null,
    "metadata": {},
    "name": "TrainingSessionDetailQuery",
    "operationKind": "query",
    "text": "query TrainingSessionDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingSessionCard_trainingSession\n    ...TrainingSessionBreadcrumb_trainingSession\n    ...TrainingSessionTrainingProgressesList_trainingSession\n    id\n  }\n}\n\nfragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {\n  id\n  start_timestamp\n  dog {\n    name\n    id\n  }\n}\n\nfragment TrainingSessionCard_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n  dog {\n    id\n    name\n  }\n}\n\nfragment TrainingSessionTrainingProgressesList_trainingSession on TrainingSession {\n  id\n  trainingStages(first: 2147483647) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      seq\n      successes\n      attempts\n      distance\n      distractions\n      duration\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '58bc07cffec75ebcbfa6bb89dc685709';
export default node;
