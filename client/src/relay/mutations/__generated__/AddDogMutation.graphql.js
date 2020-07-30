/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddDogInput = {|
  name: string,
  picture?: ?string,
  clientMutationId?: ?string,
|};
export type AddDogMutationVariables = {|
  input: AddDogInput
|};
export type AddDogMutationResponse = {|
  +addDog: ?{|
    +dogEdge: {|
      +node: ?{|
        +id: string,
        +name: string,
        +picture: ?string,
      |}
    |}
  |}
|};
export type AddDogMutation = {|
  variables: AddDogMutationVariables,
  response: AddDogMutationResponse,
|};
*/


/*
mutation AddDogMutation(
  $input: AddDogInput!
) {
  addDog(input: $input) {
    dogEdge {
      node {
        id
        name
        picture
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddDogPayload",
    "kind": "LinkedField",
    "name": "addDog",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserToDogEdge",
        "kind": "LinkedField",
        "name": "dogEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Dog",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
                "name": "picture",
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
    "name": "AddDogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddDogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e3575a8c01ad5bda7396a582b982c8d5",
    "id": null,
    "metadata": {},
    "name": "AddDogMutation",
    "operationKind": "mutation",
    "text": "mutation AddDogMutation(\n  $input: AddDogInput!\n) {\n  addDog(input: $input) {\n    dogEdge {\n      node {\n        id\n        name\n        picture\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3eb24e6393733f1957d85ef5923fc890';

module.exports = node;
