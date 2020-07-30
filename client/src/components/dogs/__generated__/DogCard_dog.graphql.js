/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DogCard_dog$ref: FragmentReference;
declare export opaque type DogCard_dog$fragmentType: DogCard_dog$ref;
export type DogCard_dog = {|
  +name: string,
  +picture: ?string,
  +$refType: DogCard_dog$ref,
|};
export type DogCard_dog$data = DogCard_dog;
export type DogCard_dog$key = {
  +$data?: DogCard_dog$data,
  +$fragmentRefs: DogCard_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogCard_dog",
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
      "name": "picture",
      "storageKey": null
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'bcaeea5136db7c8a55eec3c41daaaa0f';

module.exports = node;
