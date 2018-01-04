setImmediate(() => log(3, 'setImmediate'));
setTimeout(() => log(2, 'setTimeout 0'), 0);
const now = new Date().getTime()
while (new Date().getTime() - now < 2) { }
