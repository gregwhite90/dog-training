/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogName_dog$ref = any;
export type DogSelectQueryVariables = {||};
export type DogSelectQueryResponse = {|
  +dogs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: DogName_dog$ref,
      |}
    |}>
  |}
|};
export type DogSelectQuery = {|
  variables: DogSelectQueryVariables,
  response: DogSelectQueryResponse,
|};
*/


/*
query DogSelectQuery {
  dogs {
    edges {
      node {
        id
        ...DogName_dog
      }
    }
  }
}

fragment DogName_dog on Dog {
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
    "name": "DogSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DogConnection",
        "kind": "LinkedField",
        "name": "dogs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DogEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Dog",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "DogName_dog"
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
    "name": "DogSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DogConnection",
        "kind": "LinkedField",
        "name": "dogs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DogEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Dog",
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
    "cacheID": "907e2a18132b96c66da5a15a6d323c96",
    "id": null,
    "metadata": {},
    "name": "DogSelectQuery",
    "operationKind": "query",
    "text": "query DogSelectQuery {\n  dogs {\n    edges {\n      node {\n        id\n        ...DogName_dog\n      }\n    }\n  }\n}\n\nfragment DogName_dog on Dog {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1b92a86be227d287f35474a4e517353';

module.exports = node;
