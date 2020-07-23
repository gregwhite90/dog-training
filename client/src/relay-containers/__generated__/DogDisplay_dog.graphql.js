/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BreedDisplay_breed$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DogDisplay_dog$ref: FragmentReference;
declare export opaque type DogDisplay_dog$fragmentType: DogDisplay_dog$ref;
export type DogDisplay_dog = {|
  +name: ?string,
  +breeds: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: BreedDisplay_breed$ref,
      |}
    |}>
  |},
  +$refType: DogDisplay_dog$ref,
|};
export type DogDisplay_dog$data = DogDisplay_dog;
export type DogDisplay_dog$key = {
  +$data?: DogDisplay_dog$data,
  +$fragmentRefs: DogDisplay_dog$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DogDisplay_dog",
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
      "concreteType": "BreedConnection",
      "kind": "LinkedField",
      "name": "breeds",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "BreedEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Breed",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                  "name": "BreedDisplay_breed"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Dog",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '32dc5e54a0ae225e714a75e7a9728327';

module.exports = node;
