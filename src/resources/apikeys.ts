// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apikeys extends APIResource {
  /**
   * Generates a new API Key to access Schedo.dev API
   */
  create(body: ApikeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/apikeys', { body, ...options });
  }

  /**
   * Returns a list of API Keys for the organization
   */
  list(options?: RequestOptions): APIPromise<ApikeyListResponse> {
    return this._client.get('/apikeys', options);
  }

  /**
   * Revokes an API Key making it inactive
   */
  revoke(id: number, options?: RequestOptions): APIPromise<ApikeyRevokeResponse> {
    return this._client.delete(path`/apikeys/revoke/${id}`, options);
  }
}

export interface APIKey {
  /**
   * ID of the ent.
   */
  id?: number;

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
}

export type APIKeyEdges = unknown;

export type ApikeyListResponse = Array<Array<APIKey>>;

export type ApikeyRevokeResponse = Array<Array<APIKey>>;

export interface ApikeyCreateParams {
  name: string;
}

export declare namespace Apikeys {
  export {
    type APIKey as APIKey,
    type APIKeyEdges as APIKeyEdges,
    type ApikeyListResponse as ApikeyListResponse,
    type ApikeyRevokeResponse as ApikeyRevokeResponse,
    type ApikeyCreateParams as ApikeyCreateParams,
  };
}
