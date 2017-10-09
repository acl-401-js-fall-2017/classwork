const EventEmitter = require('events');

const ee = new EventEmitter();

ee.on('foo', () => console.log('foo was emitted'));
ee.on('bar', () => console.log('bar was emitted'));
ee.once('qux', () => console.log('qux was emitted'));

ee.emit('foo');
ee.emit('foo');
ee.emit('bar');
ee.emit('bar');
ee.emit('qux');
ee.emit('qux');