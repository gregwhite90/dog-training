/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HumanDisplay_human$ref: FragmentReference;
declare export opaque type HumanDisplay_human$fragmentType: HumanDisplay_human$ref;
export type HumanDisplay_human = {|
  +name: ?string,
  +$refType: HumanDisplay_human$ref,
|};
export type HumanDisplay_human$data = HumanDisplay_human;
export type HumanDisplay_human$key = {
  +$data?: HumanDisplay_human$data,
  +$fragmentRefs: HumanDisplay_human$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HumanDisplay_human",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Human",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6c42169691765c1703c90c9e07a750e2';

module.exports = node;
