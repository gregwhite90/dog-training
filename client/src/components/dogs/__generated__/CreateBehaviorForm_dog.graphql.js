/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateBehaviorForm_dog$ref: FragmentReference;
declare export opaque type CreateBehaviorForm_dog$fragmentType: CreateBehaviorForm_dog$ref;
export type CreateBehaviorForm_dog = {|
  +id: string,
  +name: string,
  +$refType: CreateBehaviorForm_dog$ref,
|};
export type CreateBehaviorForm_dog$data = CreateBehaviorForm_dog;
export type CreateBehaviorForm_dog$key = {
  +$data?: CreateBehaviorForm_dog$data,
  +$fragmentRefs: CreateBehaviorForm_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateBehaviorForm_dog",
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
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'aaa221e6f628040bd7cf9efb54c0234a';

module.exports = node;
