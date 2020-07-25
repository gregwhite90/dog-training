/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DogDisplay_dog$ref = any;
export type DogsRendererQueryVariables = {||};
export type DogsRendererQueryResponse = {|
  +dogs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: DogDisplay_dog$ref,
      |}
    |}>
  |}
|};
export type DogsRendererQuery = {|
  variables: DogsRendererQueryVariables,
  response: DogsRendererQueryResponse,
|};
*/


/*
query DogsRendererQuery {
  dogs {
    edges {
      node {
        id
        ...DogDisplay_dog
      }
    }
  }
}

fragment BreedDisplay_breed on Breed {
  info_url
  ...BreedName_breed
}

fragment BreedName_breed on Breed {
  name
}

fragment DogDisplay_dog on Dog {
  breeds {
    edges {
      node {
        id
        ...BreedDisplay_breed
      }
    }
  }
  ...DogName_dog
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DogsRendererQuery",
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
                    "name": "DogDisplay_dog"
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
    "name": "DogsRendererQuery",
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
                    "concreteType": "BreedConnection",
                    "kind": "LinkedField",
                    "name": "breeds",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "BreedEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Breed",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "info_url",
                                "storageKey": null
                              },
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
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
    "cacheID": "06fab6d096a1d5a34ec391ef70d761bf",
    "id": null,
    "metadata": {},
    "name": "DogsRendererQuery",
    "operationKind": "query",
    "text": "query DogsRendererQuery {\n  dogs {\n    edges {\n      node {\n        id\n        ...DogDisplay_dog\n      }\n    }\n  }\n}\n\nfragment BreedDisplay_breed on Breed {\n  info_url\n  ...BreedName_breed\n}\n\nfragment BreedName_breed on Breed {\n  name\n}\n\nfragment DogDisplay_dog on Dog {\n  breeds {\n    edges {\n      node {\n        id\n        ...BreedDisplay_breed\n      }\n    }\n  }\n  ...DogName_dog\n}\n\nfragment DogName_dog on Dog {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3797c4a81abdebd23a7837230260539';

module.exports = node;
