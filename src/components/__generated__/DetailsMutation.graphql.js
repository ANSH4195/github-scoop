/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DetailsMutationVariables = {|
  repositoryId: string,
  name?: ?string,
  description?: ?string,
|};
export type DetailsMutationResponse = {|
  +updateRepository: ?{|
    +repository: ?{|
      +name: string,
      +description: ?string,
    |}
  |}
|};
export type DetailsMutation = {|
  variables: DetailsMutationVariables,
  response: DetailsMutationResponse,
|};
*/


/*
mutation DetailsMutation(
  $repositoryId: ID!
  $name: String
  $description: String
) {
  updateRepository(input: {repositoryId: $repositoryId, name: $name, description: $description}) {
    repository {
      name
      description
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "repositoryId"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "repositoryId",
        "variableName": "repositoryId"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "UpdateRepositoryPayload",
        "kind": "LinkedField",
        "name": "updateRepository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DetailsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "UpdateRepositoryPayload",
        "kind": "LinkedField",
        "name": "updateRepository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
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
    "cacheID": "ad53f1d24519b8da275474b22364fdbd",
    "id": null,
    "metadata": {},
    "name": "DetailsMutation",
    "operationKind": "mutation",
    "text": "mutation DetailsMutation(\n  $repositoryId: ID!\n  $name: String\n  $description: String\n) {\n  updateRepository(input: {repositoryId: $repositoryId, name: $name, description: $description}) {\n    repository {\n      name\n      description\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e5bb4ac65031930ae4e53704b622716';

module.exports = node;
