Class 06: EventEmitters, Streams, TCP
===

## Feedback/Questions
* Be on time, please message when something happens
* Instruction start time?
* Projector issues
    * Hard wire
    * Network Issue
* Ryver
    * Primary notification method, have turned on
    * (Off-hour) Questions? Use class channel, not DM

## Today's Learning Objectives

1. Subscribe to an EventEmitter (event publisher) via function handlers.
1. Read and write from/to a stream
1. Write and run and TCP server with Node.js
1. Write and run a TCP client

## Shortcut

Creating a project template

### Layers
* [Networking layers](https://drawings.jvns.ca/layers/)
* [Packets](https://drawings.jvns.ca/packet/)
* [DNS](https://drawings.jvns.ca/dns/) (see also https://howdns.works/ep1/)
* [TCP](https://drawings.jvns.ca/tcp-1/)
* [OSI vs TCP/IP Model](http://www.tcpipguide.com/free/diagrams/tcpiplayers.png)
* [OSI Model](http://blog.buildingautomationmonthly.com/wp-content/uploads/2013/05/OSI-Model.png)

## Agenda

* Event Emitter pattern
	* Subscribe and use an event emitter
	* DEMO/QUESION How would we implement a publisher?
* Streams
    * as event emitters:
        * `on`: `data` and `close`
    * `write`
* Files as streams
    * Demo `fs.createReadStream()`
	* `pipe`
* TCP long-lived streams over sockets
	* EventEmitter for connecting sockets
	* call `listen` to start listening
	* Emits "client sockets"
		* Duplex streams (read and write)
		* event emitter
			* `on`: `data` and `close`
		* `write`