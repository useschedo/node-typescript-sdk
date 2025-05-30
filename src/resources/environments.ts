// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrgAPI from './org';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Creates a new org environment
   *
   * @example
   * ```ts
   * const environment = await client.environments.create({
   *   name: 'Name of your environment',
   * });
   * ```
   */
  create(body: EnvironmentCreateParams, options?: RequestOptions): APIPromise<Environment> {
    return this._client.post('/org/environments', { body, ...options });
  }

  /**
   * Retrieves a list of environments for the current org
   *
   * @example
   * ```ts
   * const environments = await client.environments.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EnvironmentListResponse> {
    return this._client.get('/org/environments', options);
  }

  /**
   * Deletes an org environment
   *
   * @example
   * ```ts
   * const environment = await client.environments.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<Environment> {
    return this._client.delete(path`/org/environments/${id}`, options);
  }
}

export interface Environment {
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
   * being populated by the EnvironmentQuery when eager-loading is set.
   */
  edges?: EnvironmentEdges;

  /**
   * Name holds the value of the "name" field.
   */
  name?: string;

  /**
   * OrganizationID holds the value of the "organization_id" field.
   */
  organization_id?: number;

  /**
   * A webhook signature key to validate incoming requests
   */
  webhook_signature_key?: string;
}

export interface EnvironmentEdges {
  /**
   * Organization that owns this environment
   */
  organization?: Array<OrgAPI.Org>;
}

export type EnvironmentListResponse = Array<Environment>;

export interface EnvironmentCreateParams {
  name: string;
}

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentEdges as EnvironmentEdges,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };
}
