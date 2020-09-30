/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogBehaviorCreatorQueryVariables = {
    id: string;
};
export type DogBehaviorCreatorQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"CreateBehaviorForm_dog" | "DogBreadcrumb_dog">;
    } | null;
};
export type DogBehaviorCreatorQuery = {
    readonly response: DogBehaviorCreatorQueryResponse;
    readonly variables: DogBehaviorCreatorQueryVariables;
};



/*
query DogBehaviorCreatorQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...CreateBehaviorForm_dog
    ...DogBreadcrumb_dog
    id
  }
}

fragment CreateBehaviorForm_dog on Dog {
  id
  name
}

fragment DogBreadcrumb_dog on Dog {
  id
  name
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
    "name": "DogBehaviorCreatorQuery",
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
            "name": "CreateBehaviorForm_dog"
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
    "name": "DogBehaviorCreatorQuery",
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
    "cacheID": "1bf6c9b104738628f6c4984cdbfc5f11",
    "id": null,
    "metadata": {},
    "name": "DogBehaviorCreatorQuery",
    "operationKind": "query",
    "text": "query DogBehaviorCreatorQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CreateBehaviorForm_dog\n    ...DogBreadcrumb_dog\n    id\n  }\n}\n\nfragment CreateBehaviorForm_dog on Dog {\n  id\n  name\n}\n\nfragment DogBreadcrumb_dog on Dog {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = '310842754322e929b2328d3228251bad';
export default node;
