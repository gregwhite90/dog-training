/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DogName_dog$ref: FragmentReference;
declare export opaque type DogName_dog$fragmentType: DogName_dog$ref;
export type DogName_dog = {|
  +name: ?string,
  +$refType: DogName_dog$ref,
|};
export type DogName_dog$data = DogName_dog;
export type DogName_dog$key = {
  +$data?: DogName_dog$data,
  +$fragmentRefs: DogName_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogName_dog",
  "selections": [
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
(node/*: any*/).hash = '3b4181956a59bd956a9ec4506723bc1a';

module.exports = node;
