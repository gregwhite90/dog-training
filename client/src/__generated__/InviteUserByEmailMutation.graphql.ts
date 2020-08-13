/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserDogRole = "OWNER" | "TRAINER" | "VIEWER" | "%future added value";
export type InviteUserByEmailInput = {
    invitee_email: string;
    dog_id: string;
    user_role: UserDogRole;
    clientMutationId?: string | null;
};
export type InviteUserByEmailMutationVariables = {
    input: InviteUserByEmailInput;
};
export type InviteUserByEmailMutationResponse = {
    readonly inviteUserByEmail: {
        readonly viewer: {
            readonly id: string;
        };
    } | null;
};
export type InviteUserByEmailMutation = {
    readonly response: InviteUserByEmailMutationResponse;
    readonly variables: InviteUserByEmailMutationVariables;
};



/*
mutation InviteUserByEmailMutation(
  $input: InviteUserByEmailInput!
) {
  inviteUserByEmail(input: $input) {
    viewer {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
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
    "concreteType": "InviteUserByEmailPayload",
    "kind": "LinkedField",
    "name": "inviteUserByEmail",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
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
    "name": "InviteUserByEmailMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InviteUserByEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e1590385c6e160f7b8c0ac4ab1e34c94",
    "id": null,
    "metadata": {},
    "name": "InviteUserByEmailMutation",
    "operationKind": "mutation",
    "text": "mutation InviteUserByEmailMutation(\n  $input: InviteUserByEmailInput!\n) {\n  inviteUserByEmail(input: $input) {\n    viewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c901646274d3189a8d71c8c1aff710b1';
export default node;
