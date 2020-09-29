/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PendingInvitationsDropdownQueryVariables = {};
export type PendingInvitationsDropdownQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"PendingInvitations_viewer">;
    } | null;
};
export type PendingInvitationsDropdownQuery = {
    readonly response: PendingInvitationsDropdownQueryResponse;
    readonly variables: PendingInvitationsDropdownQueryVariables;
};



/*
query PendingInvitationsDropdownQuery {
  viewer {
    ...PendingInvitations_viewer
    id
  }
}

fragment PendingInvitations_viewer on User {
  id
  pending_invitations_received {
    edges {
      node {
        id
        invitee_email
        user_role
        dog {
          name
          picture
          id
        }
        invited_by {
          name
          id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PendingInvitationsDropdownQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "PendingInvitations_viewer"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PendingInvitationsDropdownQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PendingInvitationConnection",
            "kind": "LinkedField",
            "name": "pending_invitations_received",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PendingInvitationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PendingInvitation",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "invitee_email",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "user_role",
                        "storageKey": null
                      },
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
                            "name": "picture",
                            "storageKey": null
                          },
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "invited_by",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v0/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "2c8892816610d8319efb51665e7d0718",
    "id": null,
    "metadata": {},
    "name": "PendingInvitationsDropdownQuery",
    "operationKind": "query",
    "text": "query PendingInvitationsDropdownQuery {\n  viewer {\n    ...PendingInvitations_viewer\n    id\n  }\n}\n\nfragment PendingInvitations_viewer on User {\n  id\n  pending_invitations_received {\n    edges {\n      node {\n        id\n        invitee_email\n        user_role\n        dog {\n          name\n          picture\n          id\n        }\n        invited_by {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f682e3e8466cbb60247daed59a4b7649';
export default node;
