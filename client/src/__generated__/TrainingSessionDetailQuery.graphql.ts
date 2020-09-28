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
        readonly " $fragmentRefs": FragmentRefs<"TrainingSessionCard_trainingSession" | "TrainingSessionBreadcrumb_trainingSession">;
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
    id
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
  "name": "id",
  "storageKey": null
};
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
                  (v2/*: any*/),
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
            "type": "TrainingSession",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c2614a7401bee444c0f0f32719474595",
    "id": null,
    "metadata": {},
    "name": "TrainingSessionDetailQuery",
    "operationKind": "query",
    "text": "query TrainingSessionDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TrainingSessionCard_trainingSession\n    ...TrainingSessionBreadcrumb_trainingSession\n    id\n  }\n}\n\nfragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {\n  id\n  dog {\n    name\n    id\n  }\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionCard_trainingSession on TrainingSession {\n  dog {\n    id\n    name\n  }\n  ...TrainingSessionName_trainingSession\n}\n\nfragment TrainingSessionName_trainingSession on TrainingSession {\n  start_timestamp\n  minutes_long\n}\n"
  }
};
})();
(node as any).hash = '55c1f37128ba9aa45305af674dd6ca39';
export default node;
