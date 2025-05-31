# Apikeys

Types:

- <code><a href="./src/resources/apikeys.ts">APIKey</a></code>
- <code><a href="./src/resources/apikeys.ts">APIKeyEdges</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyListResponse</a></code>
- <code><a href="./src/resources/apikeys.ts">ApikeyRevokeResponse</a></code>

Methods:

- <code title="post /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /apikeys">client.apikeys.<a href="./src/resources/apikeys.ts">list</a>({ ...params }) -> ApikeyListResponse</code>
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
- <code><a href="./src/resources/jobs.ts">JobInList</a></code>
- <code><a href="./src/resources/jobs.ts">Output</a></code>
- <code><a href="./src/resources/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobListFullResponse</a></code>

Methods:

- <code title="get /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobID, { ...params }) -> Output</code>
- <code title="get /jobs">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> Job</code>
- <code title="delete /jobs/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobID, { ...params }) -> string</code>
- <code title="get /jobs/{jobId}/connections/count">client.jobs.<a href="./src/resources/jobs.ts">connectionsCount</a>(jobID) -> void</code>
- <code title="post /jobs/definition">client.jobs.<a href="./src/resources/jobs.ts">define</a>({ ...params }) -> Job</code>
- <code title="post /jobs/definition/internal">client.jobs.<a href="./src/resources/jobs.ts">defineInternal</a>({ ...params }) -> Job</code>
- <code title="get /jobs/list">client.jobs.<a href="./src/resources/jobs.ts">listFull</a>({ ...params }) -> JobListFullResponse</code>
- <code title="patch /jobs/mute/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">mute</a>(jobID, { ...params }) -> Job</code>
- <code title="patch /jobs/pause/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">pause</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="patch /jobs/resume/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">resume</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="post /jobs/trigger/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">trigger</a>(jobID, { ...params }) -> JobExecution</code>
- <code title="patch /jobs/webhook/{jobId}">client.jobs.<a href="./src/resources/jobs.ts">updateWebhook</a>(jobID, { ...params }) -> Job</code>

# JobExecution

Types:

- <code><a href="./src/resources/job-execution.ts">JobExecution</a></code>
- <code><a href="./src/resources/job-execution.ts">JobExecutionFrame</a></code>
- <code><a href="./src/resources/job-execution.ts">JobExecutionListResponse</a></code>

Methods:

- <code title="get /jobs/executions/{jobId}">client.jobExecution.<a href="./src/resources/job-execution.ts">list</a>(jobID, { ...params }) -> JobExecutionListResponse</code>
- <code title="post /jobs/executions/complete/{executionId}">client.jobExecution.<a href="./src/resources/job-execution.ts">complete</a>(executionID, { ...params }) -> JobExecution</code>

# Org

Types:

- <code><a href="./src/resources/org.ts">Org</a></code>
- <code><a href="./src/resources/org.ts">OrgEdges</a></code>

Methods:

- <code title="get /org">client.org.<a href="./src/resources/org.ts">retrieve</a>() -> Org</code>

# OrgEmails

Types:

- <code><a href="./src/resources/org-emails.ts">OrgEmailCreateResponse</a></code>
- <code><a href="./src/resources/org-emails.ts">OrgEmailListResponse</a></code>
- <code><a href="./src/resources/org-emails.ts">OrgEmailDeleteResponse</a></code>

Methods:

- <code title="post /org/emails">client.orgEmails.<a href="./src/resources/org-emails.ts">create</a>({ ...params }) -> OrgEmailCreateResponse</code>
- <code title="get /org/emails">client.orgEmails.<a href="./src/resources/org-emails.ts">list</a>() -> OrgEmailListResponse</code>
- <code title="delete /org/emails">client.orgEmails.<a href="./src/resources/org-emails.ts">delete</a>({ ...params }) -> OrgEmailDeleteResponse</code>
