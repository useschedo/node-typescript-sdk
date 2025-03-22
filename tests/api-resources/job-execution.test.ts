// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Schedo from '@useschedo/node-sdk';

const client = new Schedo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobExecution', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.jobExecution.list(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.jobExecution.list(0, { 'X-API-ENVIRONMENT': 0, cursor: 0, limit: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: only required params', async () => {
    const responsePromise = client.jobExecution.complete(0, { success: true });
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
    const response = await client.jobExecution.complete(0, {
      success: true,
      error: 'Error message',
      output: 'Output message',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('poll', async () => {
    const responsePromise = client.jobExecution.poll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updates', async () => {
    const responsePromise = client.jobExecution.updates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updates: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobExecution.updates({ jobs: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Schedo.NotFoundError);
  });
});
