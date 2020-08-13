/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBehaviorsPageQueryVariables = {
    id: string;
};
export type DogBehaviorsPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"DogBehaviorsApp_dog">;
    } | null;
};
export type DogBehaviorsPageQuery = {
    readonly response: DogBehaviorsPageQueryResponse;
    readonly variables: DogBehaviorsPageQueryVariables;
};



/*
query DogBehaviorsPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...DogBehaviorsApp_dog
    id
  }
}

fragment BehaviorCard_behavior on Behavior {
  name
  explanation
}

fragment DogBehaviorsApp_dog on Dog {
  id
  name
  ...DogBehaviorsList_dog
}

fragment DogBehaviorsList_dog on Dog {
  id
  behaviors(first: 2147483647) {
    edges {
      node {
        id
        ...BehaviorCard_behavior
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
    "name": "DogBehaviorsPageQuery",
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
            "name": "DogBehaviorsApp_dog"
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
    "name": "DogBehaviorsPageQuery",
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
                "concreteType": "BehaviorConnection",
                "kind": "LinkedField",
                "name": "behaviors",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BehaviorEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Behavior",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "explanation",
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
                "storageKey": "behaviors(first:2147483647)"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "DogBehaviorsList_behaviors",
                "kind": "LinkedHandle",
                "name": "behaviors"
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
    "cacheID": "c9ccfb70fa3350b677bb076f3a1f7c7a",
    "id": null,
    "metadata": {},
    "name": "DogBehaviorsPageQuery",
    "operationKind": "query",
    "text": "query DogBehaviorsPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DogBehaviorsApp_dog\n    id\n  }\n}\n\nfragment BehaviorCard_behavior on Behavior {\n  name\n  explanation\n}\n\nfragment DogBehaviorsApp_dog on Dog {\n  id\n  name\n  ...DogBehaviorsList_dog\n}\n\nfragment DogBehaviorsList_dog on Dog {\n  id\n  behaviors(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...BehaviorCard_behavior\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '027f80239b1ca63279d08fe5ef5f0270';
export default node;
