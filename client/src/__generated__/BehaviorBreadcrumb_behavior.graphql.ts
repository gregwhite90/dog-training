/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BehaviorBreadcrumb_behavior = {
    readonly id: string;
    readonly name: string;
    readonly dog: {
        readonly name: string;
        readonly id: string;
    };
    readonly " $refType": "BehaviorBreadcrumb_behavior";
};
export type BehaviorBreadcrumb_behavior$data = BehaviorBreadcrumb_behavior;
export type BehaviorBreadcrumb_behavior$key = {
    readonly " $data"?: BehaviorBreadcrumb_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"BehaviorBreadcrumb_behavior">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BehaviorBreadcrumb_behavior",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Dog",
      "kind": "LinkedField",
      "name": "dog",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Behavior",
  "abstractKey": null
};
})();
(node as any).hash = '80d0ff39e0f55c5d5adbc5a76cadb4c0';
export default node;
