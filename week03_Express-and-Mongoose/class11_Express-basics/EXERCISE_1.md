1. Install express
2. Use an app.js with export
3. Use server.js to run

Create a GET express route the "echos" a summary of what was
requested. Include at least one "dynamic" portion in your path (`/:id`).

```js
{
    routePath: <the registered express path>,
    method: <the express method you used>,
    params: {
        <key>: <value>
    },
    query: {
        <key1>: <value1>,
        <key2>: <value2>
    }
}
```