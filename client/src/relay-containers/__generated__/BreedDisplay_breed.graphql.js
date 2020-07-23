/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BreedDisplay_breed$ref: FragmentReference;
declare export opaque type BreedDisplay_breed$fragmentType: BreedDisplay_breed$ref;
export type BreedDisplay_breed = {|
  +name: ?string,
  +infoLink: ?string,
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "infoLink",
      "storageKey": null
    }
  ],
  "type": "Breed",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'fa50e2b61e2e4c95f34d9ba87ba931f3';

module.exports = node;
