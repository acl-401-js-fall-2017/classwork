Class 17 User Management and Authentication
===

## Questions and Issues
* ?

## Learning Objectives

1. Create and add users by (unique) username and a password using auth routes, mongoose and bcrypt
1. Assign tokens with payloads and authenticate them on requests using JWT
1. Authenticate request on selected routes and allow/reject as appropriate
1. Consolidate business logic in models using static and 
instance mongoose model methods

## Agenda

### Authentication vs Authorization
* Authentication - are you who you say you are?
    1. signup/in username and password match, or
    2. user presents a token given to them when #1 happened
* Authorization - are you allowed to do operation?

### Manage Users
* User Model
    * Unique user name (or email)
    * Password handling... `bcrypt-js` - hash password
    * Augmenting Models with methods
        * static, methods, query, ...
    * EXERCISE: User Model
* Auth Routes:
    * Signup
    * EXERCISE: Signup Auth Routes
    * Signin
    * Verify

### Issue Tokens
* Keep Users "signed in" - even across new browser
* Stateless
* Keep Info (like "roles" or "user name") in Payload
* EXERCISE: Token Service

### Protect Routes
* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
* Authorization
	* Check role
* EXERCISE: Protect Route
	 

