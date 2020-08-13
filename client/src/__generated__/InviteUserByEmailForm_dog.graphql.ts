/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InviteUserByEmailForm_dog = {
    readonly id: string;
    readonly name: string;
    readonly picture: string | null;
    readonly " $refType": "InviteUserByEmailForm_dog";
};
export type InviteUserByEmailForm_dog$data = InviteUserByEmailForm_dog;
export type InviteUserByEmailForm_dog$key = {
    readonly " $data"?: InviteUserByEmailForm_dog$data;
    readonly " $fragmentRefs": FragmentRefs<"InviteUserByEmailForm_dog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InviteUserByEmailForm_dog",
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
  "type": "Dog",
  "abstractKey": null
};
(node as any).hash = '6c86e57ad8ede7d927b7478f77953dd5';
export default node;
