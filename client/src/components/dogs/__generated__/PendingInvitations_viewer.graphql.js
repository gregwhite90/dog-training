/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type UserDogRole = "OWNER" | "TRAINER" | "VIEWER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PendingInvitations_viewer$ref: FragmentReference;
declare export opaque type PendingInvitations_viewer$fragmentType: PendingInvitations_viewer$ref;
export type PendingInvitations_viewer = {|
  +id: string,
  +pending_invitations_received: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +invitee_email: string,
        +user_role: UserDogRole,
        +dog: ?{|
          +name: string,
          +picture: ?string,
          +id: string,
        |},
        +invited_by: {|
          +name: string
        |},
      |}
    |}>
  |},
  +$refType: PendingInvitations_viewer$ref,
|};
export type PendingInvitations_viewer$data = PendingInvitations_viewer;
export type PendingInvitations_viewer$key = {
  +$data?: PendingInvitations_viewer$data,
  +$fragmentRefs: PendingInvitations_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fadd1161963185e8bd3d5b9bf6596810';

module.exports = node;
