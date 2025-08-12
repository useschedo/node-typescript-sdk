// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Schedo from '@useschedo/node-sdk';

const client = new Schedo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobExecution', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.jobExecution.list(0, { 'X-API-ENVIRONMENT': 0, cursor: 0, limit: 0 });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('complete: required and optional params', async () => {
    const response = await client.jobExecution.complete(0, {
      success: true,
      complete_server_time_utc: 0,
      error: 'Error message',
      output: 'Output message',
      start_server_time_utc: 0,
    });
  });
});
