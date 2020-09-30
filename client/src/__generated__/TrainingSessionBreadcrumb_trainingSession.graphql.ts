/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionBreadcrumb_trainingSession = {
    readonly id: string;
    readonly dog: {
        readonly name: string;
        readonly id: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionName_trainingSession">;
    readonly " $refType": "TrainingSessionBreadcrumb_trainingSession";
};
export type TrainingSessionBreadcrumb_trainingSession$data = TrainingSessionBreadcrumb_trainingSession;
export type TrainingSessionBreadcrumb_trainingSession$key = {
    readonly " $data"?: TrainingSessionBreadcrumb_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionBreadcrumb_trainingSession">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrainingSessionBreadcrumb_trainingSession",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Dog",
      "kind": "LinkedField",
      "name": "dog",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingSessionName_trainingSession"
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
})();
(node as any).hash = '1708d666c3041c3398479bf53c7576fe';
export default node;
