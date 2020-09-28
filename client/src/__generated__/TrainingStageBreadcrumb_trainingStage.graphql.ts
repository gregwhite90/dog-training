/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingStageBreadcrumb_trainingStage = {
    readonly id: string;
    readonly seq: number;
    readonly behavior: {
        readonly name: string;
        readonly id: string;
        readonly dog: {
            readonly id: string;
            readonly name: string;
        };
    } | null;
    readonly " $refType": "TrainingStageBreadcrumb_trainingStage";
};
export type TrainingStageBreadcrumb_trainingStage$data = TrainingStageBreadcrumb_trainingStage;
export type TrainingStageBreadcrumb_trainingStage$key = {
    readonly " $data"?: TrainingStageBreadcrumb_trainingStage$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingStageBreadcrumb_trainingStage">;
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
  "name": "TrainingStageBreadcrumb_trainingStage",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "seq",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Behavior",
      "kind": "LinkedField",
      "name": "behavior",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Dog",
          "kind": "LinkedField",
          "name": "dog",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TrainingStage",
  "abstractKey": null
};
})();
(node as any).hash = 'cd523c6646a34f2470c874af5d0d3f23';
export default node;
