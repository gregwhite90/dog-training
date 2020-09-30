/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserDogRole = "OWNER" | "TRAINER" | "VIEWER" | "%future added value";
export type AddActions_viewer = {
    readonly id: string;
    readonly dogs: {
        readonly edges: ReadonlyArray<{
            readonly user_role: UserDogRole;
            readonly node: {
                readonly id: string;
                readonly name: string;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "AddActions_viewer";
};
export type AddActions_viewer$data = AddActions_viewer;
export type AddActions_viewer$key = {
    readonly " $data"?: AddActions_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"AddActions_viewer">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddActions_viewer",
  "selections": [
    (v0/*: any*/),
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
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
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
(node as any).hash = 'f4b176e8988744d5409bc35f606be8e8';
export default node;
