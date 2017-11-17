Data Services and Full Stack
===

## Questions/Issues
* ?

## Agenda

### Full Stack App Changes

* The BIG picture
* Services
    * Own folder (when many).
        * file per resource
        * or single api if few resources
    * Encapsulate calls based on resource
    * Isolate components from http
    * Eventually we will have base "request" or "fetcher" module
* Service calls and actions
    * Until redux:
        * component calls service
        * then calls "reducer" action

### Full Stack

Project setup for app/server
* setup
    * separate folders, repos (travis)
    * locate as siblings by convention:
        ```
        |
        +- app
        +- server
        ```
* app/server communication
    * Dev time
        * Start mongoDb
        * Start server (for example on port `3001`)
        * Start app
            * `"proxy": "http://localhost:3001"`
            * (need special config for non-json)
    * build: copy to `./server/public`
        * Project runs from `3001`
        * Need to handle `sendFile` for `index.html` at other paths

