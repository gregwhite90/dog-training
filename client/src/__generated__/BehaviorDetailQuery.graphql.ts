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
        readonly " $fragmentRefs": FragmentRefs<"BehaviorCard_behavior">;
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
    id
  }
}

fragment BehaviorCard_behavior on Behavior {
  name
  explanation
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
];
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "explanation",
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
    "cacheID": "0e3577d2d02cfa159fa055dddfcfa96a",
    "id": null,
    "metadata": {},
    "name": "BehaviorDetailQuery",
    "operationKind": "query",
    "text": "query BehaviorDetailQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BehaviorCard_behavior\n    id\n  }\n}\n\nfragment BehaviorCard_behavior on Behavior {\n  name\n  explanation\n}\n"
  }
};
})();
(node as any).hash = '19757c9bd49f6c2cf1a82223a619fbaa';
export default node;
