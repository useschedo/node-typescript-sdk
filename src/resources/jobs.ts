// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Jobs extends APIResource {
  /**
   * List all jobs
   */
  list(params: JobListParams, options?: RequestOptions): APIPromise<Job> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.get('/jobs', {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }
}

export interface Job {
  /**
   * ID of the ent.
   */
  id?: number;

  /**
   * Command to execute
   */
  command?: string;

  /**
   * Time when the job was created
   */
  created_at?: string;

  /**
   * Cron expression for job scheduling
   */
  cron_expression?: string;

  /**
   * ID of the user who owns this job
   */
  environment_id?: number;

  /**
   * Time when the job was last executed
   */
  last_run_at?: string;

  /**
   * Maximum number of retry attempts
   */
  max_retries?: number;

  /**
   * Additional metadata for the job
   */
  metadata?: Record<string, unknown>;

  /**
   * Name of the job
   */
  name?: string;

  /**
   * Scheduled time for next execution
   */
  next_run_at?: string;

  /**
   * Number of retry attempts
   */
  retry_count?: number;

  /**
   * Current job status (pending, running, completed, failed)
   */
  status?: string;

  /**
   * Maximum execution time before job is terminated
   */
  timeout?: string;

  /**
   * Time when the job was last updated
   */
  updated_at?: string;
}

export interface JobListParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export declare namespace Jobs {
  export { type Job as Job, type JobListParams as JobListParams };
}
