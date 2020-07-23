/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IntroduceHumanInput = {|
  name: string,
  clientMutationId?: ?string,
|};
export type IntroduceHumanMutationVariables = {|
  input: IntroduceHumanInput
|};
export type IntroduceHumanMutationResponse = {|
  +introduceHuman: ?{|
    +human: ?{|
      +name: ?string,
      +id: string,
    |}
  |}
|};
export type IntroduceHumanMutation = {|
  variables: IntroduceHumanMutationVariables,
  response: IntroduceHumanMutationResponse,
|};
*/


/*
mutation IntroduceHumanMutation(
  $input: IntroduceHumanInput!
) {
  introduceHuman(input: $input) {
    human {
      name
      id
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
    "concreteType": "IntroduceHumanPayload",
    "kind": "LinkedField",
    "name": "introduceHuman",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Human",
        "kind": "LinkedField",
        "name": "human",
        "plural": false,
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
            "name": "id",
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
    "name": "IntroduceHumanMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IntroduceHumanMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4f222d4e548da85b25663c7801a8c9d1",
    "id": null,
    "metadata": {},
    "name": "IntroduceHumanMutation",
    "operationKind": "mutation",
    "text": "mutation IntroduceHumanMutation(\n  $input: IntroduceHumanInput!\n) {\n  introduceHuman(input: $input) {\n    human {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ab2c000466801b33d7a71fa1263a0558';

module.exports = node;
