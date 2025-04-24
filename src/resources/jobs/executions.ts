// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  /**
   * Returns list of jobs that must be executed
   */
  list(options?: RequestOptions): APIPromise<ExecutionListResponse> {
    return this._client.get('/jobs/executions', options);
  }

  /**
   * Marks pending job execution as complete
   */
  complete(
    executionID: number,
    body: ExecutionCompleteParams,
    options?: RequestOptions,
  ): APIPromise<JobExecution> {
    return this._client.post(path`/jobs/executions/complete/${executionID}`, { body, ...options });
  }

  /**
   * Returns a list of executions for a job
   */
  listForJob(
    jobID: number,
    params: ExecutionListForJobParams,
    options?: RequestOptions,
  ): APIPromise<ExecutionListForJobResponse> {
    const { 'X-API-ENVIRONMENT': xAPIEnvironment, ...query } = params;
    return this._client.get(path`/jobs/executions/${jobID}`, {
      query,
      ...options,
      headers: buildHeaders([{ 'X-API-ENVIRONMENT': xAPIEnvironment.toString() }, options?.headers]),
    });
  }

  /**
   * Send job executions over Server Sent Events
   */
  stream(query: ExecutionStreamParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/jobs/executions/sse', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
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

export type ExecutionListResponse = Array<JobExecution>;

export type ExecutionListForJobResponse = Array<ExecutionListForJobResponse.ExecutionListForJobResponseItem>;

export namespace ExecutionListForJobResponse {
  export interface ExecutionListForJobResponseItem {
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

    metadata?: Record<string, unknown>;

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
}

export interface ExecutionCompleteParams {
  success: boolean;

  complete_server_time_utc?: number;

  error?: string;

  output?: string;

  start_server_time_utc?: number;
}

export interface ExecutionListForJobParams {
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

export interface ExecutionStreamParams {
  /**
   * List of Job Codes to stream
   */
  jobs?: Array<string>;
}

export declare namespace Executions {
  export {
    type JobExecution as JobExecution,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionListForJobResponse as ExecutionListForJobResponse,
    type ExecutionCompleteParams as ExecutionCompleteParams,
    type ExecutionListForJobParams as ExecutionListForJobParams,
    type ExecutionStreamParams as ExecutionStreamParams,
  };
}
