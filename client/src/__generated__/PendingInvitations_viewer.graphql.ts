/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserDogRole = "OWNER" | "TRAINER" | "VIEWER" | "%future added value";
export type PendingInvitations_viewer = {
    readonly id: string;
    readonly pending_invitations_received: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly invitee_email: string;
                readonly user_role: UserDogRole;
                readonly dog: {
                    readonly name: string;
                    readonly picture: string | null;
                    readonly id: string;
                };
                readonly invited_by: {
                    readonly name: string;
                };
            } | null;
        } | null> | null;
    };
    readonly dogs: {
        readonly edges: ReadonlyArray<{
            readonly user_role: UserDogRole;
            readonly node: {
                readonly id: string;
                readonly name: string;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "PendingInvitations_viewer";
};
export type PendingInvitations_viewer$data = PendingInvitations_viewer;
export type PendingInvitations_viewer$key = {
    readonly " $data"?: PendingInvitations_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"PendingInvitations_viewer">;
};



const node: ReaderFragment = (function(){
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
  "name": "user_role",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PendingInvitations_viewer",
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Dog",
                  "kind": "LinkedField",
                  "name": "dog",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
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
                    (v2/*: any*/)
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserToDogConnection",
      "kind": "LinkedField",
      "name": "dogs",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserToDogEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Dog",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v2/*: any*/)
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
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '039371b6d8d9e232fe1d902c91d456fb';
export default node;
