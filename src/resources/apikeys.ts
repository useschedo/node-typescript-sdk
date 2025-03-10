// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as OrgAPI from './org';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Apikeys extends APIResource {
  /**
   * Generates a new API Key to access Schedo.dev API
   */
  create(body: ApikeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/apikeys', { body, ...options });
  }
}

export interface APIKey {
  /**
   * Key holds the value of the "key" field.
   */
  id?: string;

  /**
   * CreatedAt holds the value of the "created_at" field.
   */
  created_at?: string;

  /**
   * Edges holds the relations/edges for other nodes in the graph. The values are
   * being populated by the ApiKeyQuery when eager-loading is set.
   */
  edges?: APIKeyEdges;

  /**
   * Name holds the value of the "name" field.
   */
  name?: string;

  /**
   * OrganizationID holds the value of the "organization_id" field.
   */
  organization_id?: number;

  /**
   * Revoked holds the value of the "revoked" field.
   */
  revoked?: boolean;

  /**
   * UpdatedAt holds the value of the "updated_at" field.
   */
  updated_at?: string;
}

export interface APIKeyEdges {
  /**
   * Organization holds the value of the organization edge.
   */
  organization?: OrgAPI.Org;
}

export interface ApikeyCreateParams {
  name: string;
}

export declare namespace Apikeys {
  export {
    type APIKey as APIKey,
    type APIKeyEdges as APIKeyEdges,
    type ApikeyCreateParams as ApikeyCreateParams,
  };
}
