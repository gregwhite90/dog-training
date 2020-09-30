/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorDetailQueryVariables = {
    id: string;
};
export type BehaviorDetailQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"BehaviorCard_behavior" | "BehaviorBreadcrumb_behavior">;
    } | null;
};
export type BehaviorDetailQuery = {
    readonly response: BehaviorDetailQueryResponse;
    readonly variables: BehaviorDetailQueryVariables;
};



/*
query BehaviorDetailQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...BehaviorCard_behavior
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

fragment BehaviorCard_behavior on Behavior {
  name
  explanation
  incentive_method
  incentive_description
  verbal_command
  hand_signal
  release_command
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
    "name": "BehaviorDetailQuery",
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
            "name": "BehaviorCard_behavior"
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
    "name": "BehaviorDetailQuery",
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
                "args": null,
                "kind": "ScalarField",
                "name": "explanation",
                "storageKey": null
              },
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
                "name": "incentive_description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "verbal_command",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hand_signal",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "release_command",
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
    "cacheID": "31720afb14dbbe445cae53ba9e9294fb",
    "id": null,
    "metadata": {},
    "name": "BehaviorDetailQuery",
    "operationKind": "query",
    "text": "query BehaviorDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BehaviorCard_behavior\n    ...BehaviorBreadcrumb_behavior\n    id\n  }\n}\n\nfragment BehaviorBreadcrumb_behavior on Behavior {\n  id\n  name\n  dog {\n    name\n    id\n  }\n}\n\nfragment BehaviorCard_behavior on Behavior {\n  name\n  explanation\n  incentive_method\n  incentive_description\n  verbal_command\n  hand_signal\n  release_command\n}\n"
  }
};
})();
(node as any).hash = '4f83b854891b270c47b0181202b9d7d2';
export default node;
