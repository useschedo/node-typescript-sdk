// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class JobExecutionResource extends APIResource {
  /**
   * Returns a list of executions for a job
   *
   * @example
   * ```ts
   * const jobExecutionFrames = await client.jobExecution.list(
   *   0,
   *   { 'X-API-ENVIRONMENT': 0 },
   * );
   * ```
   */
  list(
    jobID: number,
    params: JobExecutionListParams,
    options?: RequestOptions,
  ): APIPromise<JobExecutionListResponse> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment, ...query } = params;
    return this._client.get(path`/jobs/executions/${jobID}`, {
      query,
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Marks pending job execution as complete
   *
   * @example
   * ```ts
   * const jobExecution = await client.jobExecution.complete(0, {
   *   success: true,
   * });
   * ```
   */
  complete(
    executionID: number,
    body: JobExecutionCompleteParams,
    options?: RequestOptions,
  ): APIPromise<JobExecution> {
    return this._client.post(path`/jobs/executions/complete/${executionID}`, { body, ...options });
  }
}

export interface JobExecution {
  /**
   * ID of the ent.
   */
  id?: number;

  /**
   * Duration holds the value of the "duration" field.
   */
  duration?: number;

  /**
   * Time when execution completed
   */
  end_time?: string;

  /**
   * Error message if execution failed
   */
  error?: string;

  /**
   * Exit code of the executed command
   */
  exit_code?: number;

  /**
   * JobCode holds the value of the "job_code" field.
   */
  job_code?: string;

  /**
   * Output of the executed command
   */
  output?: string;

  /**
   * Time when execution was picked up by a worker
   */
  pick_up_time?: string;

  /**
   * Time when execution started
   */
  start_time?: string;

  /**
   * Execution status (running, completed, failed, skipped, expired)
   */
  status?: string;
}

export interface JobExecutionFrame {
  /**
   * ID of the ent.
   */
  id?: number;

  /**
   * Duration holds the value of the "duration" field.
   */
  duration?: number;

  /**
   * Time when execution completed
   */
  end_time?: string;

  /**
   * Error message if execution failed
   */
  error?: string;

  /**
   * Exit code of the executed command
   */
  exit_code?: number;

  /**
   * JobCode holds the value of the "job_code" field.
   */
  job_code?: string;

  metadata?: { [key: string]: unknown };

  /**
   * Output of the executed command
   */
  output?: string;

  /**
   * Time when execution was picked up by a worker
   */
  pick_up_time?: string;

  /**
   * Time when execution started
   */
  start_time?: string;

  /**
   * Execution status (running, completed, failed, skipped, expired)
   */
  status?: string;
}

export type JobExecutionListResponse = Array<JobExecutionFrame>;

export interface JobExecutionListParams {
  /**
   * Header param: 1
   */
  'X-API-ENVIRONMENT': number;

  /**
   * Query param: 1
   */
  cursor?: number;

  /**
   * Query param: 1
   */
  limit?: number;
}

export interface JobExecutionCompleteParams {
  success: boolean;

  complete_server_time_utc?: number;

  error?: string;

  output?: string;

  start_server_time_utc?: number;
}

export declare namespace JobExecutionResource {
  export {
    type JobExecution as JobExecution,
    type JobExecutionFrame as JobExecutionFrame,
    type JobExecutionListResponse as JobExecutionListResponse,
    type JobExecutionListParams as JobExecutionListParams,
    type JobExecutionCompleteParams as JobExecutionCompleteParams,
  };
}
