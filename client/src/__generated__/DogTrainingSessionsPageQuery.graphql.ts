/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogTrainingSessionsPageQueryVariables = {
    id: string;
};
export type DogTrainingSessionsPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"DogTrainingSessionsApp_dog" | "DogBreadcrumb_dog">;
    } | null;
};
export type DogTrainingSessionsPageQuery = {
    readonly response: DogTrainingSessionsPageQueryResponse;
    readonly variables: DogTrainingSessionsPageQueryVariables;
};



/*
query DogTrainingSessionsPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...DogTrainingSessionsApp_dog
    ...DogBreadcrumb_dog
    id
  }
}

fragment DogBreadcrumb_dog on Dog {
  id
  name
}

fragment DogTrainingSessionsApp_dog on Dog {
  id
  name
  ...DogTrainingSessionsList_dog
}

fragment DogTrainingSessionsList_dog on Dog {
  id
  trainingSessions(first: 2147483647) {
    edges {
      node {
        id
        ...TrainingSessionCard_trainingSession
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

fragment TrainingSessionCard_trainingSession on TrainingSession {
  dog {
    id
    name
  }
  ...TrainingSessionName_trainingSession
}

fragment TrainingSessionName_trainingSession on TrainingSession {
  start_timestamp
  minutes_long
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DogTrainingSessionsPageQuery",
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
            "name": "DogTrainingSessionsApp_dog"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DogBreadcrumb_dog"
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
    "name": "DogTrainingSessionsPageQuery",
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "TrainingSessionConnection",
                "kind": "LinkedField",
                "name": "trainingSessions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrainingSessionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
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
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "DogTrainingSessionsList_trainingSessions",
                "kind": "LinkedHandle",
                "name": "trainingSessions"
              }
            ],
            "type": "Dog",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "57d365677e4feba04a0b1b91b31c126e",
    "id": null,
    "metadata": {},
    "name": "DogTrainingSessionsPageQuery",
    "operationKind": "query",
    "text": "query DogTrainingSessionsPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogTrainingSessionsApp_dog\n    ...DogBreadcrumb_dog\n    id\n  }\n}\n\nfragment DogBreadcrumb_dog on Dog {\n  id\n  name\n}\n\nfragment DogTrainingSessionsApp_dog on Dog {\n  id\n  name\n  ...DogTrainingSessionsList_dog\n}\n\nfragment DogTrainingSessionsList_dog on Dog {\n  id\n  trainingSessions(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...TrainingSessionCard_trainingSession\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TrainingSessionCard_trainingSession on TrainingSession {\n  dog {\n    id\n    name\n  }\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n"
  }
};
})();
(node as any).hash = '23fcf740d83c60bb0169979cf6cd9449';
export default node;
