// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as JobExecutionAPI from './job-execution';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Retrieve a job by its ID
   */
  retrieve(jobID: number, params: JobRetrieveParams, options?: RequestOptions): APIPromise<Output> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.get(path`/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

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
  delete(jobID: number, params: JobDeleteParams, options?: RequestOptions): APIPromise<string> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.delete(path`/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Tries to create a new Job Definition
   */
  define(body: JobDefineParams, options?: RequestOptions): APIPromise<Job> {
    return this._client.post('/jobs/definition', { body, ...options });
  }

  /**
   * Temporary stops a job from running
   */
  pause(
    jobID: number,
    params: JobPauseParams,
    options?: RequestOptions,
  ): APIPromise<JobExecutionAPI.JobExecution> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.patch(path`/jobs/pause/${jobID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Resumes job execution
   */
  resume(
    jobID: number,
    params: JobResumeParams,
    options?: RequestOptions,
  ): APIPromise<JobExecutionAPI.JobExecution> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.patch(path`/jobs/resume/${jobID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Immediately triggers a job
   */
  trigger(
    jobID: number,
    params: JobTriggerParams,
    options?: RequestOptions,
  ): APIPromise<JobExecutionAPI.JobExecution> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.post(path`/jobs/trigger/${jobID}`, {
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
   * Blocking holds the value of the "blocking" field.
   */
  blocking?: boolean;

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
   * Paused holds the value of the "paused" field.
   */
  paused?: boolean;

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

export interface Output {
  job?: Job;

  last_run?: JobExecutionAPI.JobExecution;
}

export type JobDeleteResponse = string;

export interface JobRetrieveParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobListParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobDeleteParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobDefineParams {
  name: string;

  schedule: string;

  blocking?: boolean;

  max_retries?: number;

  metadata?: Record<string, unknown>;

  timeout?: string;
}

export interface JobPauseParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobResumeParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobTriggerParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type Output as Output,
    type JobDeleteResponse as JobDeleteResponse,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobDefineParams as JobDefineParams,
    type JobPauseParams as JobPauseParams,
    type JobResumeParams as JobResumeParams,
    type JobTriggerParams as JobTriggerParams,
  };
}
