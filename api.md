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

- <code title="get /org/environments">client.environments.<a href="./src/resources/environments.ts">list</a>() -> EnvironmentListResponse</code>
- <code title="delete /org/environments/{id}">client.environments.<a href="./src/resources/environments.ts">delete</a>(id) -> Environment</code>
- <code title="post /org/environments">client.environments.<a href="./src/resources/environments.ts">created</a>({ ...params }) -> Environment</code>

# Org

Types:

- <code><a href="./src/resources/org.ts">Org</a></code>
- <code><a href="./src/resources/org.ts">OrgEdges</a></code>

Methods:

- <code title="get /org">client.org.<a href="./src/resources/org.ts">retrieve</a>() -> Org</code>
