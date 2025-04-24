// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ApikeysAPI from './apikeys';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OrgResource extends APIResource {
  /**
   * Retrieves information about current org
   */
  retrieve(options?: RequestOptions): APIPromise<Org> {
    return this._client.get('/org', options);
  }
}

export interface Org {
  /**
   * ID of the ent.
   */
  id?: number;

  /**
   * External Clerk organization ID
   */
  clerk_id?: string;

  /**
   * Edges holds the relations/edges for other nodes in the graph. The values are
   * being populated by the OrgQuery when eager-loading is set.
   */
  edges?: OrgEdges;

  /**
   * List of organization emails
   */
  emails?: Array<string>;

  /**
   * Organization name
   */
  name?: string;

  /**
   * SingleUserOrg holds the value of the "single_user_org" field.
   */
  single_user_org?: boolean;
}

export interface OrgEdges {
  /**
   * APIKeys holds the value of the api_keys edge.
   */
  api_keys?: Array<ApikeysAPI.APIKey>;
}

export declare namespace OrgResource {
  export { type Org as Org, type OrgEdges as OrgEdges };
}
