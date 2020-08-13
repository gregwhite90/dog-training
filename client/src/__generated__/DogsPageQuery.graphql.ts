/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DogsPageQueryVariables = {};
export type DogsPageQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"DogsApp_viewer" | "PendingInvitations_viewer">;
    } | null;
};
export type DogsPageQuery = {
    readonly response: DogsPageQueryResponse;
    readonly variables: DogsPageQueryVariables;
};



/*
query DogsPageQuery {
  viewer {
    ...DogsApp_viewer
    ...PendingInvitations_viewer
    id
  }
}

fragment DogCard_dog on Dog {
  name
  picture
}

fragment DogsApp_viewer on User {
  id
  ...DogsList_viewer
}

fragment DogsList_viewer on User {
  id
  dogs(first: 2147483647) {
    edges {
      user_role
      node {
        id
        ...DogCard_dog
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment PendingInvitations_viewer on User {
  id
  pending_invitations_received {
    edges {
      node {
        id
        invitee_email
        user_role
        dog {
          name
          picture
          id
        }
        invited_by {
          name
          id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "user_role",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "picture",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DogsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "DogsApp_viewer"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PendingInvitations_viewer"
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
    "name": "DogsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "UserToDogConnection",
            "kind": "LinkedField",
            "name": "dogs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserToDogEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Dog",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "dogs(first:2147483647)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "DogsList_dogs",
            "kind": "LinkedHandle",
            "name": "dogs"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PendingInvitationConnection",
            "kind": "LinkedField",
            "name": "pending_invitations_received",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PendingInvitationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PendingInvitation",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "invitee_email",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Dog",
                        "kind": "LinkedField",
                        "name": "dog",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "invited_by",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v0/*: any*/)
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef11a90d2726af596eb547af7bc0250f",
    "id": null,
    "metadata": {},
    "name": "DogsPageQuery",
    "operationKind": "query",
    "text": "query DogsPageQuery {\n  viewer {\n    ...DogsApp_viewer\n    ...PendingInvitations_viewer\n    id\n  }\n}\n\nfragment DogCard_dog on Dog {\n  name\n  picture\n}\n\nfragment DogsApp_viewer on User {\n  id\n  ...DogsList_viewer\n}\n\nfragment DogsList_viewer on User {\n  id\n  dogs(first: 2147483647) {\n    edges {\n      user_role\n      node {\n        id\n        ...DogCard_dog\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PendingInvitations_viewer on User {\n  id\n  pending_invitations_received {\n    edges {\n      node {\n        id\n        invitee_email\n        user_role\n        dog {\n          name\n          picture\n          id\n        }\n        invited_by {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a32c88e18e259ba323fc1d9c9463d18e';
export default node;
