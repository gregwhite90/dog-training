/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BreedName_breed$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BreedDisplay_breed$ref: FragmentReference;
declare export opaque type BreedDisplay_breed$fragmentType: BreedDisplay_breed$ref;
export type BreedDisplay_breed = {|
  +info_url: ?string,
  +$fragmentRefs: BreedName_breed$ref,
  +$refType: BreedDisplay_breed$ref,
|};
export type BreedDisplay_breed$data = BreedDisplay_breed;
export type BreedDisplay_breed$key = {
  +$data?: BreedDisplay_breed$data,
  +$fragmentRefs: BreedDisplay_breed$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreedDisplay_breed",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "info_url",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreedName_breed"
    }
  ],
  "type": "Breed",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '02a7b2f3dfda6f8f16a4142f33eb6f50';

module.exports = node;
