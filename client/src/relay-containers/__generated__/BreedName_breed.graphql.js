/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BreedName_breed$ref: FragmentReference;
declare export opaque type BreedName_breed$fragmentType: BreedName_breed$ref;
export type BreedName_breed = {|
  +name: ?string,
  +$refType: BreedName_breed$ref,
|};
export type BreedName_breed$data = BreedName_breed;
export type BreedName_breed$key = {
  +$data?: BreedName_breed$data,
  +$fragmentRefs: BreedName_breed$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreedName_breed",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Breed",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6686dcc8fb24a11fd5268e73e05af2e1';

module.exports = node;
