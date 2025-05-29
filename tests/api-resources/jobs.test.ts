// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Schedo from '@useschedo/node-sdk';

const client = new Schedo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.jobs.retrieve(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.jobs.retrieve(0, { 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.jobs.list({ 'X-API-ENVIRONMENT': 0 });
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
    const response = await client.jobs.list({ 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.jobs.delete(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.jobs.delete(0, { 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('connectionsCount', async () => {
    const responsePromise = client.jobs.connectionsCount(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('define: only required params', async () => {
    const responsePromise = client.jobs.define({ name: 'Name of your job', schedule: '0 0 * * *' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('define: required and optional params', async () => {
    const response = await client.jobs.define({
      name: 'Name of your job',
      schedule: '0 0 * * *',
      blocking: true,
      metadata: { foo: 'bar' },
      timeout_seconds: 0,
      webhook_url: 'https://example.com/webhook',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('defineInternal: only required params', async () => {
    const responsePromise = client.jobs.defineInternal({ name: 'Name of your job', schedule: '0 0 * * *' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('defineInternal: required and optional params', async () => {
    const response = await client.jobs.defineInternal({
      name: 'Name of your job',
      schedule: '0 0 * * *',
      blocking: true,
      metadata: { foo: 'bar' },
      timeout_seconds: 0,
      webhook_url: 'https://example.com/webhook',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listFull: only required params', async () => {
    const responsePromise = client.jobs.listFull({ 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFull: required and optional params', async () => {
    const response = await client.jobs.listFull({ 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('mute: only required params', async () => {
    const responsePromise = client.jobs.mute(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('mute: required and optional params', async () => {
    const response = await client.jobs.mute(0, { 'X-API-ENVIRONMENT': 0, muted: true });
  });

  // skipped: tests are disabled for the time being
  test.skip('pause: only required params', async () => {
    const responsePromise = client.jobs.pause(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('pause: required and optional params', async () => {
    const response = await client.jobs.pause(0, { 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('resume: only required params', async () => {
    const responsePromise = client.jobs.resume(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('resume: required and optional params', async () => {
    const response = await client.jobs.resume(0, { 'X-API-ENVIRONMENT': 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.jobs.trigger(0, { 'X-API-ENVIRONMENT': 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('trigger: required and optional params', async () => {
    const response = await client.jobs.trigger(0, { 'X-API-ENVIRONMENT': 0 });
  });
});
