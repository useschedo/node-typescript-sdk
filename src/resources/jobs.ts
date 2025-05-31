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
   *
   * @example
   * ```ts
   * const output = await client.jobs.retrieve(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const job = await client.jobs.list({
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const job = await client.jobs.delete(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
   */
  delete(jobID: number, params: JobDeleteParams, options?: RequestOptions): APIPromise<string> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.delete(path`/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Retrieves a number of active connections for a job
   *
   * @example
   * ```ts
   * await client.jobs.connectionsCount(0);
   * ```
   */
  connectionsCount(jobID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/jobs/${jobID}/connections/count`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Tries to create a new Job Definition
   *
   * @example
   * ```ts
   * const job = await client.jobs.define({
   *   name: 'Name of your job',
   *   schedule: '0 0 * * *',
   * });
   * ```
   */
  define(body: JobDefineParams, options?: RequestOptions): APIPromise<Job> {
    return this._client.post('/jobs/definition', { body, ...options });
  }

  /**
   * Tries to create a new Internal Job Definition
   *
   * @example
   * ```ts
   * const job = await client.jobs.defineInternal({
   *   name: 'Name of your job',
   *   schedule: '0 0 * * *',
   * });
   * ```
   */
  defineInternal(body: JobDefineInternalParams, options?: RequestOptions): APIPromise<Job> {
    return this._client.post('/jobs/definition/internal', { body, ...options });
  }

  /**
   * List all jobs
   *
   * @example
   * ```ts
   * const jobInLists = await client.jobs.listFull({
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
   */
  listFull(params: JobListFullParams, options?: RequestOptions): APIPromise<JobListFullResponse> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment } = params;
    return this._client.get('/jobs/list', {
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Update a job's muted status
   *
   * @example
   * ```ts
   * const job = await client.jobs.mute(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
   */
  mute(jobID: number, params: JobMuteParams, options?: RequestOptions): APIPromise<Job> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment, ...body } = params;
    return this._client.patch(path`/jobs/mute/${jobID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Temporary stops a job from running
   *
   * @example
   * ```ts
   * const jobExecution = await client.jobs.pause(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const jobExecution = await client.jobs.resume(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const jobExecution = await client.jobs.trigger(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
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

  /**
   * Update a job's webhook URL
   *
   * @example
   * ```ts
   * const job = await client.jobs.updateWebhook(0, {
   *   'X-API-ENVIRONMENT': 0,
   * });
   * ```
   */
  updateWebhook(jobID: number, params: JobUpdateWebhookParams, options?: RequestOptions): APIPromise<Job> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment, ...body } = params;
    return this._client.patch(path`/jobs/webhook/${jobID}`, {
      body,
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
   * Whether notifications for this job are muted
   */
  muted?: boolean;

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
   * Maximum execution time before job is terminated
   */
  timeout_seconds?: number;

  /**
   * Type of job (push, sdk, etc.)
   */
  type?: 'sdk' | 'push';

  /**
   * Time when the job was last updated
   */
  updated_at?: string;

  /**
   * A webhook url to triggen on job exection
   */
  webhook_url?: string;
}

export interface JobInList {
  connections_count?: number;

  job?: Job;
}

export interface Output {
  connections_count?: number;

  job?: Job;

  last_run?: JobExecutionAPI.JobExecution;
}

export type JobDeleteResponse = string;

export type JobListFullResponse = Array<JobInList>;

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

  metadata?: Record<string, unknown>;

  timeout_seconds?: number;

  webhook_url?: string;
}

export interface JobDefineInternalParams {
  name: string;

  schedule: string;

  blocking?: boolean;

  metadata?: Record<string, unknown>;

  timeout_seconds?: number;

  webhook_url?: string;
}

export interface JobListFullParams {
  /**
   * 1
   */
  'X-API-ENVIRONMENT': number;
}

export interface JobMuteParams {
  /**
   * Header param: 1
   */
  'X-API-ENVIRONMENT': number;

  /**
   * Body param:
   */
  muted?: boolean;
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

export interface JobUpdateWebhookParams {
  /**
   * Header param: 1
   */
  'X-API-ENVIRONMENT': number;

  /**
   * Body param:
   */
  webhook_url?: string;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobInList as JobInList,
    type Output as Output,
    type JobDeleteResponse as JobDeleteResponse,
    type JobListFullResponse as JobListFullResponse,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobDefineParams as JobDefineParams,
    type JobDefineInternalParams as JobDefineInternalParams,
    type JobListFullParams as JobListFullParams,
    type JobMuteParams as JobMuteParams,
    type JobPauseParams as JobPauseParams,
    type JobResumeParams as JobResumeParams,
    type JobTriggerParams as JobTriggerParams,
    type JobUpdateWebhookParams as JobUpdateWebhookParams,
  };
}
