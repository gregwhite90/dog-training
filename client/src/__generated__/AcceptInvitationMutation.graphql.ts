/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AcceptInvitationInput = {
    invitation_id: string;
    user_id: string;
    clientMutationId?: string | null;
};
export type AcceptInvitationMutationVariables = {
    input: AcceptInvitationInput;
};
export type AcceptInvitationMutationResponse = {
    readonly acceptInvitation: {
        readonly dogEdge: {
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly picture: string | null;
            } | null;
        };
        readonly viewer: {
            readonly id: string;
        };
    } | null;
};
export type AcceptInvitationMutation = {
    readonly response: AcceptInvitationMutationResponse;
    readonly variables: AcceptInvitationMutationVariables;
};



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

const node: ConcreteRequest = (function(){
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
(node as any).hash = 'eadec0adde30feca411b4b58fa5b385f';
export default node;
