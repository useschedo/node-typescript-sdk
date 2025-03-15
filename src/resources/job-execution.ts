// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class JobExecutionResource extends APIResource {
  /**
   * Marks pending job execution as complete
   */
  complete(executionID: number, options?: RequestOptions): APIPromise<JobExecution> {
    return this._client.post(path`/jobs/executions/complete/${executionID}`, options);
  }

  /**
   * Returns list of jobs that must be executed
   */
  poll(options?: RequestOptions): APIPromise<JobExecution> {
    return this._client.get('/jobs/executions', options);
  }
}

export interface JobExecution {
  /**
   * ID of the ent.
   */
  id?: number;

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
   * Time when execution started
   */
  start_time?: string;

  /**
   * Execution status (running, completed, failed)
   */
  status?: string;
}

export declare namespace JobExecutionResource {
  export { type JobExecution as JobExecution };
}
