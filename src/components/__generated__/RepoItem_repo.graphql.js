/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepoItem_repo$ref: FragmentReference;
declare export opaque type RepoItem_repo$fragmentType: RepoItem_repo$ref;
export type RepoItem_repo = {|
  +id: string,
  +name: string,
  +createdAt: any,
  +url: any,
  +$refType: RepoItem_repo$ref,
|};
export type RepoItem_repo$data = RepoItem_repo;
export type RepoItem_repo$key = {
  +$data?: RepoItem_repo$data,
  +$fragmentRefs: RepoItem_repo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoItem_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '01e5b1ac8a70a216a2ca19040014c518';

module.exports = node;
