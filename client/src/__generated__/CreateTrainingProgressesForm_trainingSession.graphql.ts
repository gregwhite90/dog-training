/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateTrainingProgressesForm_trainingSession = {
    readonly id: string;
    readonly dog: {
        readonly id: string;
        readonly behaviors: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly name: string;
                    readonly trainingStages: {
                        readonly edges: ReadonlyArray<{
                            readonly node: {
                                readonly id: string;
                                readonly " $fragmentRefs": FragmentRefs<"TrainingStageName_trainingStage">;
                            } | null;
                        } | null> | null;
                    };
                } | null;
            } | null> | null;
        };
    };
    readonly trainingStages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
            } | null;
        } | null> | null;
    };
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
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateTrainingProgressesForm_trainingSession",
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
          "args": (v1/*: any*/),
          "concreteType": "BehaviorConnection",
          "kind": "LinkedField",
          "name": "behaviors",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "BehaviorEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Behavior",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
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
                      "args": (v1/*: any*/),
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
                                (v0/*: any*/),
                                {
                                  "args": null,
                                  "kind": "FragmentSpread",
                                  "name": "TrainingStageName_trainingStage"
                                }
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": "trainingStages(first:2147483647)"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "behaviors(first:2147483647)"
        }
      ],
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
(node as any).hash = '440dc6d4f580bb7bcd75f983d018cb2e';
export default node;
