const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    
};

const myEmitter = new MyEmitter();

myEmitter.on('callme', (data) => {
    console.log('I am called ', data);
});

myEmitter.on('callme', (data) => {
    console.log('I am called second time: ', data);
});

myEmitter.on('check', (data) => {
    console.log('Checking 1 ', data);
});

myEmitter.on('check', () => {
    console.log('Checking 2 ');
});

myEmitter.prependListener('check', () => {
    console.log('Checking 4');
});

myEmitter.prependListener('check', () => {
    console.log('Checking 3');
});

myEmitter.once('callmeonce', () => {
    console.log('Call me once');
});

myEmitter.emit('callmeonce');
myEmitter.emit('callmeonce');
myEmitter.emit('callmeonce');


myEmitter.emit('callme');
myEmitter.emit('callme');
myEmitter.emit('callme');

myEmitter.emit('check');
myEmitter.emit('check');
myEmitter.emit('check');
