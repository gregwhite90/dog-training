/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogTrainingSessionCreatorQueryVariables = {
    id: string;
};
export type DogTrainingSessionCreatorQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"CreateTrainingSessionForm_dog" | "DogBreadcrumb_dog">;
    } | null;
};
export type DogTrainingSessionCreatorQuery = {
    readonly response: DogTrainingSessionCreatorQueryResponse;
    readonly variables: DogTrainingSessionCreatorQueryVariables;
};



/*
query DogTrainingSessionCreatorQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...CreateTrainingSessionForm_dog
    ...DogBreadcrumb_dog
    id
  }
}

fragment CreateTrainingSessionForm_dog on Dog {
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
    "name": "DogTrainingSessionCreatorQuery",
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
            "name": "CreateTrainingSessionForm_dog"
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
    "name": "DogTrainingSessionCreatorQuery",
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
    "cacheID": "34181056e81c36e3bf19ad42e026a0b5",
    "id": null,
    "metadata": {},
    "name": "DogTrainingSessionCreatorQuery",
    "operationKind": "query",
    "text": "query DogTrainingSessionCreatorQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CreateTrainingSessionForm_dog\n    ...DogBreadcrumb_dog\n    id\n  }\n}\n\nfragment CreateTrainingSessionForm_dog on Dog {\n  id\n  name\n}\n\nfragment DogBreadcrumb_dog on Dog {\n  id\n  name\n}\n"
  }
};
})();
(node as any).hash = 'b34276382acdc6a690c0149ddbb80cc8';
export default node;
