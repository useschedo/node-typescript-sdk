// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApikeysAPI from '../apikeys';
import * as EmailsAPI from './emails';
import {
  EmailCreateParams,
  EmailCreateResponse,
  EmailDeleteParams,
  EmailDeleteResponse,
  EmailListResponse,
  Emails,
} from './emails';
import * as EnvironmentsAPI from './environments';
import { Environment, EnvironmentCreateParams, EnvironmentListResponse, Environments } from './environments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class OrgResource extends APIResource {
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);

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
  edges?: Org.Edges;

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

export namespace Org {
  /**
   * Edges holds the relations/edges for other nodes in the graph. The values are
   * being populated by the OrgQuery when eager-loading is set.
   */
  export interface Edges {
    /**
     * APIKeys holds the value of the api_keys edge.
     */
    api_keys?: Array<ApikeysAPI.APIKey>;
  }
}

OrgResource.Emails = Emails;
OrgResource.Environments = Environments;

export declare namespace OrgResource {
  export { type Org as Org };

  export {
    Emails as Emails,
    type EmailCreateResponse as EmailCreateResponse,
    type EmailListResponse as EmailListResponse,
    type EmailDeleteResponse as EmailDeleteResponse,
    type EmailCreateParams as EmailCreateParams,
    type EmailDeleteParams as EmailDeleteParams,
  };

  export {
    Environments as Environments,
    type Environment as Environment,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };
}
