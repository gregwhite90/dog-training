/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBreedToDogInput = {|
  dog_id: string,
  breed_id: string,
  clientMutationId?: ?string,
|};
export type AddBreedToDogMutationVariables = {|
  input: AddBreedToDogInput
|};
export type AddBreedToDogMutationResponse = {|
  +addBreedToDog: ?{|
    +dog: ?{|
      +id: string,
      +name: ?string,
      +breeds: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string
          |}
        |}>
      |},
    |}
  |}
|};
export type AddBreedToDogMutation = {|
  variables: AddBreedToDogMutationVariables,
  response: AddBreedToDogMutationResponse,
|};
*/


/*
mutation AddBreedToDogMutation(
  $input: AddBreedToDogInput!
) {
  addBreedToDog(input: $input) {
    dog {
      id
      name
      breeds {
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddBreedToDogPayload",
    "kind": "LinkedField",
    "name": "addBreedToDog",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Dog",
        "kind": "LinkedField",
        "name": "dog",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "concreteType": "BreedConnection",
            "kind": "LinkedField",
            "name": "breeds",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BreedEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Breed",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBreedToDogMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddBreedToDogMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fca9e3b8206a261631bf9962941914f6",
    "id": null,
    "metadata": {},
    "name": "AddBreedToDogMutation",
    "operationKind": "mutation",
    "text": "mutation AddBreedToDogMutation(\n  $input: AddBreedToDogInput!\n) {\n  addBreedToDog(input: $input) {\n    dog {\n      id\n      name\n      breeds {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae850c2746118a1bef54fe770238d7ab';

module.exports = node;
