/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IncentiveMethod = "LURE" | "SHAPE" | "%future added value";
export type CreateTrainingStagesForm_behavior = {
    readonly id: string;
    readonly name: string;
    readonly incentive_method: IncentiveMethod | null;
    readonly verbal_command: string | null;
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "CreateTrainingStagesForm_behavior";
};
export type CreateTrainingStagesForm_behavior$data = CreateTrainingStagesForm_behavior;
export type CreateTrainingStagesForm_behavior$key = {
    readonly " $data"?: CreateTrainingStagesForm_behavior$data;
    readonly " $fragmentRefs": FragmentRefs<"CreateTrainingStagesForm_behavior">;
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
  "name": "CreateTrainingStagesForm_behavior",
  "selections": [
    (v0/*: any*/),
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
      "name": "incentive_method",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "verbal_command",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "TrainingStageConnection",
      "kind": "LinkedField",
      "name": "trainingStages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TrainingStageEdge",
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
  "type": "Behavior",
  "abstractKey": null
};
})();
(node as any).hash = 'f7b8790d35738f4c76d5d582a19e176a';
export default node;
