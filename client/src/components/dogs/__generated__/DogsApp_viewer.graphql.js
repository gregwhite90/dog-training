/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DogsList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DogsApp_viewer$ref: FragmentReference;
declare export opaque type DogsApp_viewer$fragmentType: DogsApp_viewer$ref;
export type DogsApp_viewer = {|
  +id: string,
  +$fragmentRefs: DogsList_viewer$ref,
  +$refType: DogsApp_viewer$ref,
|};
export type DogsApp_viewer$data = DogsApp_viewer;
export type DogsApp_viewer$key = {
  +$data?: DogsApp_viewer$data,
  +$fragmentRefs: DogsApp_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogsApp_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DogsList_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ace7cd433c0c10a26fe4eb65bde6d7fc';

module.exports = node;
