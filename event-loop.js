const fs = require('fs');
log = console.log;

function test() {
    fs.readdir('./', function(err, items) {
        setTimeout(() => log(1, 'IO - setTimeout 0'), 0);
        setImmediate(() => log(2, 'IO - setImmediate'));
    });
    Promise.resolve().then(() => console.log(6, 'promise then'));

    log(1, 'start');

    setTimeout(() => log(2, 'setTimeout 0'), 0);
    setImmediate(() => log(3, 'setImmediate'));

    process.nextTick(() => log(4, 'nextTick'));

    (function() {
        log(5, 'iife');
    })();

    log(7, 'pre-exit');
    setTimeout(() => log(8, 'setTimeout 0'), 0);
}

test()
log(9, 'outer')
