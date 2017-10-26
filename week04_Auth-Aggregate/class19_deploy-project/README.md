Project Week, Deployment, Teams
===

## Questions and Issues

* ?

## Learning Objectives

1. Deploy production sever
    1. Manage environment variables
    1. Add Mongo instance to Heroku
1. Project process

## Agenda

Repo is here: https://github.com/martypdx/demo-app

### Travis

* Create Travis account
* Two ways to link:
	1. Add Repo from Travis
	1. Add Travis to Repo

### Environment Variables

* `.env` file for storing environment variable
	* **MUST** add `.env` to `.gitignore`
* load via:
	* `env $(cat .env)` if everyone on NIX
	* use `npm i dotenv -S` and `require('dotenv').config()` for 
	cross-platform support
	* Handle test case as well
* Add `.env.example` to let devs know

### Heroku

* Create account
* Download CLI toolkit
	* https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
* Deploy to Heroku
	* Remember to specifiy engine in `package.json`:
	```json
	{
	"name": "pets-r-kewl",
	"version": "1.0.0",
	"engines": {
		"node": "8.x"
	},
	"description": "",
	```
* Use CLI
	* `heroku <cmd> --help`
	* `heroku create <app_name>` (initializes git remote)
	* `heroku create app <app_name>`
	* `heroku apps`
	* `heroku git:remote -a <app_name>`
	* `heroku logs --tail`
	* `git`
		* `git remote -v`
		* `git push heroku master`
* Manage `env` variables
	* Dashboard
	* `heroku config`
* Setup `mLab`

### Misc

* Add an Api guide at index.html
* Build from API.md