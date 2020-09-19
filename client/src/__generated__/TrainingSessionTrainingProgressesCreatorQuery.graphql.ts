/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionTrainingProgressesCreatorQueryVariables = {
    id: string;
};
export type TrainingSessionTrainingProgressesCreatorQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TrainingSessionBreadcrumb_trainingSession" | "CreateTrainingProgressesForm_trainingSession">;
    } | null;
};
export type TrainingSessionTrainingProgressesCreatorQuery = {
    readonly response: TrainingSessionTrainingProgressesCreatorQueryResponse;
    readonly variables: TrainingSessionTrainingProgressesCreatorQueryVariables;
};



/*
query TrainingSessionTrainingProgressesCreatorQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TrainingSessionBreadcrumb_trainingSession
    ...CreateTrainingProgressesForm_trainingSession
    id
  }
}

fragment CreateTrainingProgressesForm_trainingSession on TrainingSession {
  id
  trainingStages(first: 1) {
    edges {
      node {
        id
      }
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TrainingSessionTrainingProgressesCreatorQuery",
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
            "name": "TrainingSessionBreadcrumb_trainingSession"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateTrainingProgressesForm_trainingSession"
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
    "name": "TrainingSessionTrainingProgressesCreatorQuery",
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
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "dog",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
                  }
                ],
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
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "trainingStages(first:1)"
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
    "cacheID": "4e37a2865fbbdb871911f360befc31d2",
    "id": null,
    "metadata": {},
    "name": "TrainingSessionTrainingProgressesCreatorQuery",
    "operationKind": "query",
    "text": "query TrainingSessionTrainingProgressesCreatorQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingSessionBreadcrumb_trainingSession\n    ...CreateTrainingProgressesForm_trainingSession\n    id\n  }\n}\n\nfragment CreateTrainingProgressesForm_trainingSession on TrainingSession {\n  id\n  trainingStages(first: 1) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n\nfragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {\n  id\n  dog {\n    name\n    id\n  }\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n"
  }
};
})();
(node as any).hash = '6f07bd2d9de6f6758051de2effb485ae';
export default node;
