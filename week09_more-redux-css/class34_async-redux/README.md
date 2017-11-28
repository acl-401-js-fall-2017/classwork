Async Redux
===

## Questions/Issues
* ?

## Agenda

Enhance thunk-based action creators with asynchronous activities

* Review Server/App Projects
  * `server` sibling repo
  * add `proxy` setting to `app` `package.json`
  * `services` folder
    * encapsulate api class
    * resource specific functions

* Basic use of API
  * import into `actions.js`
  * Use imported `api`
  * Handle success and failures _as siblings_ of promise result

* Helper Libraries
  * redux promise?

* (Testing - time allowing)
  * Higher Order Function
  * Jest Mock
  * Thunk API injection