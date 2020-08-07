/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserAdder_dog$ref: FragmentReference;
declare export opaque type UserAdder_dog$fragmentType: UserAdder_dog$ref;
export type UserAdder_dog = {|
  +id: string,
  +name: string,
  +picture: ?string,
  +$refType: UserAdder_dog$ref,
|};
export type UserAdder_dog$data = UserAdder_dog;
export type UserAdder_dog$key = {
  +$data?: UserAdder_dog$data,
  +$fragmentRefs: UserAdder_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserAdder_dog",
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
(node/*: any*/).hash = '86c39d59c0d38dc10db284b40c9eca46';

module.exports = node;
