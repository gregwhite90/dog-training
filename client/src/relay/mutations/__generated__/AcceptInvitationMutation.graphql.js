/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AcceptInvitationInput = {|
  invitation_id: string,
  user_id: string,
  clientMutationId?: ?string,
|};
export type AcceptInvitationMutationVariables = {|
  input: AcceptInvitationInput
|};
export type AcceptInvitationMutationResponse = {|
  +acceptInvitation: ?{|
    +dogEdge: {|
      +node: ?{|
        +id: string,
        +name: string,
        +picture: ?string,
      |}
    |},
    +viewer: {|
      +id: string
    |},
  |}
|};
export type AcceptInvitationMutation = {|
  variables: AcceptInvitationMutationVariables,
  response: AcceptInvitationMutationResponse,
|};
*/


/*
mutation AcceptInvitationMutation(
  $input: AcceptInvitationInput!
) {
  acceptInvitation(input: $input) {
    dogEdge {
      node {
        id
        name
        picture
      }
    }
    viewer {
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
    "concreteType": "AcceptInvitationPayload",
    "kind": "LinkedField",
    "name": "acceptInvitation",
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
                "kind": "ScalarField",
                "name": "picture",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
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
    "name": "AcceptInvitationMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AcceptInvitationMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e532b2682f5722672c1dbb76cf4028d5",
    "id": null,
    "metadata": {},
    "name": "AcceptInvitationMutation",
    "operationKind": "mutation",
    "text": "mutation AcceptInvitationMutation(\n  $input: AcceptInvitationInput!\n) {\n  acceptInvitation(input: $input) {\n    dogEdge {\n      node {\n        id\n        name\n        picture\n      }\n    }\n    viewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eadec0adde30feca411b4b58fa5b385f';

module.exports = node;
