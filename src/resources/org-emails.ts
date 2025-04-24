// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OrgEmails extends APIResource {
  /**
   * Adds an email to the organization
   */
  create(params: OrgEmailCreateParams, options?: RequestOptions): APIPromise<OrgEmailCreateResponse> {
    const { body } = params;
    return this._client.post('/org/emails', { body: body, ...options });
  }

  /**
   * Gets all emails for the organization
   */
  list(options?: RequestOptions): APIPromise<OrgEmailListResponse> {
    return this._client.get('/org/emails', options);
  }

  /**
   * Removes an email from the organization
   */
  delete(params: OrgEmailDeleteParams, options?: RequestOptions): APIPromise<OrgEmailDeleteResponse> {
    const { body } = params;
    return this._client.delete('/org/emails', { body: body, ...options });
  }
}

export type OrgEmailCreateResponse = Array<string>;

export type OrgEmailListResponse = Array<string>;

export type OrgEmailDeleteResponse = Array<string>;

export interface OrgEmailCreateParams {
  body: string;
}

export interface OrgEmailDeleteParams {
  body: string;
}

export declare namespace OrgEmails {
  export {
    type OrgEmailCreateResponse as OrgEmailCreateResponse,
    type OrgEmailListResponse as OrgEmailListResponse,
    type OrgEmailDeleteResponse as OrgEmailDeleteResponse,
    type OrgEmailCreateParams as OrgEmailCreateParams,
    type OrgEmailDeleteParams as OrgEmailDeleteParams,
  };
}
