/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HumanDisplay_human$ref = any;
export type HumansRendererQueryVariables = {||};
export type HumansRendererQueryResponse = {|
  +humans: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: HumanDisplay_human$ref,
      |}
    |}>
  |}
|};
export type HumansRendererQuery = {|
  variables: HumansRendererQueryVariables,
  response: HumansRendererQueryResponse,
|};
*/


/*
query HumansRendererQuery {
  humans {
    edges {
      node {
        id
        ...HumanDisplay_human
      }
    }
  }
}

fragment HumanDisplay_human on Human {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HumansRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HumanConnection",
        "kind": "LinkedField",
        "name": "humans",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HumanEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Human",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "HumanDisplay_human"
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HumansRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HumanConnection",
        "kind": "LinkedField",
        "name": "humans",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HumanEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Human",
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
    ]
  },
  "params": {
    "cacheID": "91cf6cea9e669804268dd44d21b0d9e7",
    "id": null,
    "metadata": {},
    "name": "HumansRendererQuery",
    "operationKind": "query",
    "text": "query HumansRendererQuery {\n  humans {\n    edges {\n      node {\n        id\n        ...HumanDisplay_human\n      }\n    }\n  }\n}\n\nfragment HumanDisplay_human on Human {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fcaa8df191ccf788767a466f487f0e12';

module.exports = node;
