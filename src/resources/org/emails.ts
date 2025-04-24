// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Emails extends APIResource {
  /**
   * Adds an email to the organization
   */
  create(params: EmailCreateParams, options?: RequestOptions): APIPromise<EmailCreateResponse> {
    const { body } = params;
    return this._client.post('/org/emails', { body: body, ...options });
  }

  /**
   * Gets all emails for the organization
   */
  list(options?: RequestOptions): APIPromise<EmailListResponse> {
    return this._client.get('/org/emails', options);
  }

  /**
   * Removes an email from the organization
   */
  delete(params: EmailDeleteParams, options?: RequestOptions): APIPromise<EmailDeleteResponse> {
    const { body } = params;
    return this._client.delete('/org/emails', { body: body, ...options });
  }
}

export type EmailCreateResponse = Array<string>;

export type EmailListResponse = Array<string>;

export type EmailDeleteResponse = Array<string>;

export interface EmailCreateParams {
  body: string;
}

export interface EmailDeleteParams {
  body: string;
}

export declare namespace Emails {
  export {
    type EmailCreateResponse as EmailCreateResponse,
    type EmailListResponse as EmailListResponse,
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailCreateParams as EmailCreateParams,
    type EmailDeleteParams as EmailDeleteParams,
  };
}
