// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apikeys extends APIResource {
  /**
   * Generates a new API Key to access Schedo.dev API
   *
   * @example
   * ```ts
   * const apiKey = await client.apikeys.create({
   *   environment_id: 1,
   *   name: 'First ApiKey',
   * });
   * ```
   */
  create(body: ApikeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/apikeys', { body, ...options });
  }

  /**
   * Returns a list of API Keys for the organization
   *
   * @example
   * ```ts
   * const apikeys = await client.apikeys.list({
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
   */
  list(params: ApikeyListParams, options?: RequestOptions): APIPromise<ApikeyListResponse> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.get('/apikeys', {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Revokes an API Key making it inactive
   *
   * @example
   * ```ts
   * const response = await client.apikeys.revoke(0);
   * ```
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
   * EnvironmentID holds the value of the "environment_id" field.
   */
  environment_id?: number;

  /**
   * Internal holds the value of the "internal" field.
   */
  internal?: boolean;

  /**
   * Key holds the value of the "key" field.
   */
  key?: string;

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
  environment_id: number;

  name: string;
}

export interface ApikeyListParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export declare namespace Apikeys {
  export {
    type APIKey as APIKey,
    type APIKeyEdges as APIKeyEdges,
    type ApikeyListResponse as ApikeyListResponse,
    type ApikeyRevokeResponse as ApikeyRevokeResponse,
    type ApikeyCreateParams as ApikeyCreateParams,
    type ApikeyListParams as ApikeyListParams,
  };
}
