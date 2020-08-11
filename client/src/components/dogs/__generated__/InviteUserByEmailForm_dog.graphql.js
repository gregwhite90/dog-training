/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type InviteUserByEmailForm_dog$ref: FragmentReference;
declare export opaque type InviteUserByEmailForm_dog$fragmentType: InviteUserByEmailForm_dog$ref;
export type InviteUserByEmailForm_dog = {|
  +id: string,
  +name: string,
  +picture: ?string,
  +$refType: InviteUserByEmailForm_dog$ref,
|};
export type InviteUserByEmailForm_dog$data = InviteUserByEmailForm_dog;
export type InviteUserByEmailForm_dog$key = {
  +$data?: InviteUserByEmailForm_dog$data,
  +$fragmentRefs: InviteUserByEmailForm_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '6c86e57ad8ede7d927b7478f77953dd5';

module.exports = node;
