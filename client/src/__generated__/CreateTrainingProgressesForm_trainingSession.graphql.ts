/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateTrainingProgressesForm_trainingSession = {
    readonly id: string;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "CreateTrainingProgressesForm_trainingSession";
};
export type CreateTrainingProgressesForm_trainingSession$data = CreateTrainingProgressesForm_trainingSession;
export type CreateTrainingProgressesForm_trainingSession$key = {
    readonly " $data"?: CreateTrainingProgressesForm_trainingSession$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateTrainingProgressesForm_trainingSession">;
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
  "name": "CreateTrainingProgressesForm_trainingSession",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "TrainingSessionToTrainingStageConnection",
      "kind": "LinkedField",
      "name": "trainingStages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TrainingSessionToTrainingStageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TrainingStage",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "trainingStages(first:1)"
    }
  ],
  "type": "TrainingSession",
  "abstractKey": null
};
})();
(node as any).hash = 'cd14c87df13e74a2d50424d9122adad5';
export default node;
