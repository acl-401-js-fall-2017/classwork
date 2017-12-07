User Auth and Management
===

## Questions/Issues
* ?

## Auth

### Server
* User model
* Auth routes
* Protect with `ensureAuth` middleware

### App

#### Store

1. Add `token`, `user`, `authError` to the store
1. Add `constants` (based on design for actions/reducers)
1. (TDD) Reducer for auth workflows:
    * `user` - track the logged in user
    * `token` - track our token
    * `userError` - an errors in the auth process
1. Add new reducer(s) to root reducer
1. (TDD) actions
    * async actions based on authenticating and getting user
    * `verify`, `signin`, `signup`, `signout`

#### Components

Add Signin/up form(s)
* Presentation
* `connect`

#### Routes

* Explicit Login/out "routes"
* `PrivateRoute` redirects to login, but "remembers" route on signin
    * `Auth` redirects when there *is* a user back to that "remembered" route

#### Manage Token

1. Use in `request` module
    * subscribe to `store`
1. Bootstrap from (local)Storage
    * Usually in `App` "checkToken"
    * Check via `verify`
1. TODO: FOUU on load
