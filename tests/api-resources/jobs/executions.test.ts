// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Schedosdk from 'schedosdk';

const client = new Schedosdk({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executions', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.jobs.executions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: only required params', async () => {
    const responsePromise = client.jobs.executions.complete(0, { success: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: required and optional params', async () => {
    const response = await client.jobs.executions.complete(0, {
      success: true,
      complete_server_time_utc: 0,
      error: 'Error message',
      output: 'Output message',
      start_server_time_utc: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listForJob: only required params', async () => {
    const responsePromise = client.jobs.executions.listForJob(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listForJob: required and optional params', async () => {
    const response = await client.jobs.executions.listForJob(0, {
      'X-API-ENVIRONMENT': 0,
      cursor: 0,
      limit: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('stream', async () => {
    const responsePromise = client.jobs.executions.stream();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stream: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobs.executions.stream({ jobs: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schedosdk.NotFoundError);
  });
});
