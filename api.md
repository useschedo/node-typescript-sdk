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

# Org

Types:

- <code><a href="./src/resources/org.ts">Org</a></code>
- <code><a href="./src/resources/org.ts">OrgEdges</a></code>

Methods:

- <code title="get /org">client.org.<a href="./src/resources/org.ts">retrieve</a>() -> Org</code>
