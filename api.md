# Apikeys

Types:

- <code><a href="./src/resources/apikeys.ts">APIKey</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyListResponse</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyRevokeResponse</a></code>

Methods:

- <code title="post /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">list</a>({ ...params }) -> ApikeyListResponse</code>
- <code title="delete /apikeys/revoke/{id}">client.apikeys.<a href="./src/resources/apikeys.ts">revoke</a>(id) -> ApikeyRevokeResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs/jobs.ts">Job</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/jobs/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">retrieve</a>(jobID, { ...params }) -> JobRetrieveResponse</code>
- <code title="get /jobs">client.jobs.<a href="./src/resources/jobs/jobs.ts">list</a>({ ...params }) -> Job</code>
- <code title="delete /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">delete</a>(jobID, { ...params }) -> string</code>
- <code title="post /jobs/definition">client.jobs.<a href="./src/resources/jobs/jobs.ts">createDefinition</a>({ ...params }) -> Job</code>
- <code title="patch /jobs/mute/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">mute</a>(jobID, { ...params }) -> Job</code>
- <code title="patch /jobs/pause/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">pause</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="patch /jobs/resume/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">resume</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="post /jobs/trigger/{jobId}">client.jobs.<a href="./src/resources/jobs/jobs.ts">trigger</a>(jobID, { ...params }) -> JobExecution</code>

## Executions

Types:

- <code><a href="./src/resources/jobs/executions.ts">JobExecution</a></code>
- <code><a href="./src/resources/jobs/executions.ts">ExecutionListResponse</a></code>
- <code><a href="./src/resources/jobs/executions.ts">ExecutionListForJobResponse</a></code>

Methods:

- <code title="get /jobs/executions">client.jobs.executions.<a href="./src/resources/jobs/executions.ts">list</a>() -> ExecutionListResponse</code>
- <code title="post /jobs/executions/complete/{executionId}">client.jobs.executions.<a href="./src/resources/jobs/executions.ts">complete</a>(executionID, { ...params }) -> JobExecution</code>
- <code title="get /jobs/executions/{jobId}">client.jobs.executions.<a href="./src/resources/jobs/executions.ts">listForJob</a>(jobID, { ...params }) -> ExecutionListForJobResponse</code>
- <code title="get /jobs/executions/sse">client.jobs.executions.<a href="./src/resources/jobs/executions.ts">stream</a>({ ...params }) -> void</code>

# Org

Types:

- <code><a href="./src/resources/org/org.ts">Org</a></code>

Methods:

- <code title="get /org">client.org.<a href="./src/resources/org/org.ts">retrieve</a>() -> Org</code>

## Emails

Types:

- <code><a href="./src/resources/org/emails.ts">EmailCreateResponse</a></code>
- <code><a href="./src/resources/org/emails.ts">EmailListResponse</a></code>
- <code><a href="./src/resources/org/emails.ts">EmailDeleteResponse</a></code>

Methods:

- <code title="post /org/emails">client.org.emails.<a href="./src/resources/org/emails.ts">create</a>({ ...params }) -> EmailCreateResponse</code>
- <code title="get /org/emails">client.org.emails.<a href="./src/resources/org/emails.ts">list</a>() -> EmailListResponse</code>
- <code title="delete /org/emails">client.org.emails.<a href="./src/resources/org/emails.ts">delete</a>({ ...params }) -> EmailDeleteResponse</code>

## Environments

Types:

- <code><a href="./src/resources/org/environments.ts">Environment</a></code>
- <code><a href="./src/resources/org/environments.ts">EnvironmentListResponse</a></code>

Methods:

- <code title="post /org/environments">client.org.environments.<a href="./src/resources/org/environments.ts">create</a>({ ...params }) -> Environment</code>
- <code title="get /org/environments">client.org.environments.<a href="./src/resources/org/environments.ts">list</a>() -> EnvironmentListResponse</code>
- <code title="delete /org/environments/{id}">client.org.environments.<a href="./src/resources/org/environments.ts">delete</a>(id) -> Environment</code>
