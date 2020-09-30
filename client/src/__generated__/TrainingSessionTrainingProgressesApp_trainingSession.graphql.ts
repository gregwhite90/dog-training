/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrainingSessionTrainingProgressesApp_trainingSession = {
    readonly id: string;
    readonly dog: {
        readonly id: string;
        readonly name: string;
    };
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionTrainingProgressesList_trainingSession" | "TrainingSessionName_trainingSession">;
    readonly " $refType": "TrainingSessionTrainingProgressesApp_trainingSession";
};
export type TrainingSessionTrainingProgressesApp_trainingSession$data = TrainingSessionTrainingProgressesApp_trainingSession;
export type TrainingSessionTrainingProgressesApp_trainingSession$key = {
    readonly " $data"?: TrainingSessionTrainingProgressesApp_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"TrainingSessionTrainingProgressesApp_trainingSession">;
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
  "name": "TrainingSessionTrainingProgressesApp_trainingSession",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrainingSessionTrainingProgressesList_trainingSession"
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
(node as any).hash = '6ecc38ef524dd55998b0b7a80ca6df1e';
export default node;
