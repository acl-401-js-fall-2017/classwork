Intro to React and `create-react-app`
===

## Misc
* We will review backend projects on Wednesday
* TA Changes:
	* Kayla and Johnny
	* Emily Cain (10am-12pm for 401s)
* Keep doing codewars.com!
* Second half "reset"! Time for front end

## Agenda
* Review second half of 401
* ?
* Modern SPA
* React
* Advanced JS

## Today's Learning Objectives

* Use `create-react-app` to develop and run a React app
* Use JavaScript and `jsx` to render to DOM
* Use jsx as a javascript expression in conjunction with plain JavaScript
* Understand core React concepts: 
    * JSX "html in JavaScript"
    * `state` and `props`
    * Components
    * Render cycle


### Background

* Cycle of Thin and Thick Clients
	* Mainframe days - "dumb terminal"
	* Rise of PC (Windows95) - "client-server", "thick-client" (windows apps)
	* Rise of Internet - "dumb browser", server rendered pages
	* Rise of Mobile and HTML5 - "web app", powerful client
	* Next?
		* Everything is a client/server, nodes on the Internet
			* Real-time, connected
		* What class of server do you need?
		* IoT - not just for humans :)
        * SSR "Universal" JavaScript 

* Single Page Applications
	* View changes are programmatic, browser not refreshing
	* Talk to servers

* Frontend Libraries and Frameworks
	* What do they do?
		* Render and Manipulate the DOM
	* But what do they help me do?
		* Keep the DOM up to date
		* Respond to user interactions
	* Reactive programming
		* Offer developers API for declaring or describing:
			* how the data and html should be combined (interpolation)
			* data changes
		* Syncing data to UI happens "automagically"

* JavaScript (, HTML, CSS)
	* New language features
	* Optimizations and other production enhancements
	* Requires a build system
	* Requires a server to run development

* End result for "Modern Front End Development":
	1. Amount and complexity of programming logic for the app is great
		* Advanced JavaScript
		* Modularity and Organization
	1. Build system layer
	1. Application layer
		* React offers a whole new paradigm
	1. Let focus on build or app, but not both. 
	1. App more relevant to start with. Then you can care about details of build system
	1. Enter `create-react-app`...

### Why React?
* JS FTW!
* Community
* Build System

### Create React App

Let's try it out...

* Install via:

> ```
> > npm i -g create-react-app
> ```

* Run via:

>```
> > create-react-app my-new-app
> > cd my-new-app
> ```

### Project format
* Notice CRA uses
    * `CamelCase` file names
        * fine to use `kabob-names`
    * 2 spaces (html/jsx)

### Add `.eslintrc`

```
{
    "extends": ["eslint:recommended", "react-app"],
    "rules": {
        "no-console": "warn",
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "space-in-parens": ["error"],
        "object-curly-spacing": ["error", "always"],
        "react/jsx-curly-spacing": [2, {"when": "never", "spacing": {
            "objectLiterals": "never"
        }}]
    }
}
```

### JSX

Try it out: https://babeljs.io/repl/

* Adds a new use of `{` `}`
	* new eslint rules
* Gets transpiled to JavaScript (that creates vdom)
* Try [babeljs.io/repl](http://babeljs.io/repl) to see what JSX gets turned into
* Offers declarative construct on top of React.createElement calls
* Enables full usage of Javascript
* Any normal JS expressions may be used
	* Variables, closures, etc.
	* Calling other functions
* Write valid jsx
	* tags (xml)
	* [To the Docs!](https://facebook.github.io/react/docs/introducing-jsx.html)
	* [To the Docs Again!](https://facebook.github.io/react/docs/jsx-in-depth.html)

### ReactDOM.render

* Render content to DOM
* (Re-Render content to DOM, but probably don't need to...)

### Key Concepts

* Manage `state` and `props`
* Data flows down, events flow up
* Components
    * "Dumb" components are pure functions that take `props`
    * `extends Component`
        * Need state
        * Need life cycle methods (not today)
    * `extends PureComponent`
        * (Probably not today)
* Understand React render cycle

### React rendering

* Render process
    * Virtual DOM
    * Tree Diff ([Reconciliation](https://facebook.github.io/react/docs/reconciliation.html))
    * Update DOM
* Rerender is same process
* Lists
    * Using `.map()` to handle lists of things
    * Using `key` to map between data and DOM

### React rules of state

1. Data flows down, events go up
1. Push state to lowest possible component
1. Shared state between sibling components, must belong
to a common ancestor.
