# Apikeys

Types:

- <code><a href="./src/resources/apikeys.ts">APIKey</a></code>
- <code><a href="./src/resources/apikeys.ts">APIKeyEdges</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyListResponse</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyRevokeResponse</a></code>

Methods:

- <code title="post /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">list</a>() -> ApikeyListResponse</code>
- <code title="delete /apikeys/revoke/{id}">client.apikeys.<a href="./src/resources/apikeys.ts">revoke</a>(id) -> ApikeyRevokeResponse</code>

# Environments

Types:

- <code><a href="./src/resources/environments.ts">Environment</a></code>
- <code><a href="./src/resources/environments.ts">EnvironmentEdges</a></code>
- <code><a href="./src/resources/environments.ts">EnvironmentListResponse</a></code>

Methods:

- <code title="post /org/environments">client.environments.<a href="./src/resources/environments.ts">create</a>({ ...params }) -> Environment</code>
- <code title="get /org/environments">client.environments.<a href="./src/resources/environments.ts">list</a>() -> EnvironmentListResponse</code>
- <code title="delete /org/environments/{id}">client.environments.<a href="./src/resources/environments.ts">delete</a>(id) -> Environment</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">Job</a></code>
- <code><a href="./src/resources/jobs.ts">Output</a></code>
- <code><a href="./src/resources/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobID, { ...params }) -> Output</code>
- <code title="get /jobs">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> Job</code>
- <code title="delete /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobID, { ...params }) -> string</code>
- <code title="post /jobs/definition">client.jobs.<a href="./src/resources/jobs.ts">define</a>({ ...params }) -> Job</code>
- <code title="patch /jobs/mute/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">mute</a>(jobID, { ...params }) -> Job</code>
- <code title="patch /jobs/pause/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">pause</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="patch /jobs/resume/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">resume</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="post /jobs/trigger/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">trigger</a>(jobID, { ...params }) -> JobExecution</code>

# JobExecution

Types:

- <code><a href="./src/resources/job-execution.ts">JobExecution</a></code>
- <code><a href="./src/resources/job-execution.ts">JobExecutionFrame</a></code>
- <code><a href="./src/resources/job-execution.ts">JobExecutionListResponse</a></code>
- <code><a href="./src/resources/job-execution.ts">JobExecutionPollResponse</a></code>

Methods:

- <code title="get /jobs/executions/{jobId}">client.jobExecution.<a href="./src/resources/job-execution.ts">list</a>(jobID, { ...params }) -> JobExecutionListResponse</code>
- <code title="post /jobs/executions/complete/{executionId}">client.jobExecution.<a href="./src/resources/job-execution.ts">complete</a>(executionID, { ...params }) -> JobExecution</code>
- <code title="get /jobs/executions">client.jobExecution.<a href="./src/resources/job-execution.ts">poll</a>() -> JobExecutionPollResponse</code>

# Org

Types:

- <code><a href="./src/resources/org.ts">Org</a></code>
- <code><a href="./src/resources/org.ts">OrgEdges</a></code>

Methods:

- <code title="get /org">client.org.<a href="./src/resources/org.ts">retrieve</a>() -> Org</code>
