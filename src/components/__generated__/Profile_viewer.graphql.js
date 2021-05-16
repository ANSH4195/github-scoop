/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RepoList_repos$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Profile_viewer$ref: FragmentReference;
declare export opaque type Profile_viewer$fragmentType: Profile_viewer$ref;
export type Profile_viewer = {|
  +name: ?string,
  +url: any,
  +avatarUrl: any,
  +bio: ?string,
  +$fragmentRefs: RepoList_repos$ref,
  +$refType: Profile_viewer$ref,
|};
export type Profile_viewer$data = Profile_viewer;
export type Profile_viewer$key = {
  +$data?: Profile_viewer$data,
  +$fragmentRefs: Profile_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Profile_viewer",
  "selections": [
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
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RepoList_repos"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1ee6a39ab8db2d8690638770240290aa';

module.exports = node;
