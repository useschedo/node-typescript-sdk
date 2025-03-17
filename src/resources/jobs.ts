// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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

  /**
   * After you delete a job, you can't recover it, but if you have services still
   * running with that job reference, they will re-create and re-schedule a new job
   * automatically.
   */
  delete(jobID: number, options?: RequestOptions): APIPromise<string> {
    return this._client.delete(path`/jobs/${jobID}`, options);
  }

  /**
   * Tries to create a new Job Definition
   */
  define(body: JobDefineParams, options?: RequestOptions): APIPromise<Job> {
    return this._client.post('/jobs/definition', { body, ...options });
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
   * Key holds the value of the "key" field.
   */
  key?: string;

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

export type JobDeleteResponse = string;

export interface JobListParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobDefineParams {
  name: string;

  schedule: string;

  max_retries?: number;

  metadata?: Record<string, unknown>;

  timeout?: string;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobDeleteResponse as JobDeleteResponse,
    type JobListParams as JobListParams,
    type JobDefineParams as JobDefineParams,
  };
}
