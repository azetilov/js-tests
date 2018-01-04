# js-tests

# [Event loop test](./event-loop.js)

Output:
```
1 'start'
5 'iife'
7 'pre-exit'
9 'outer'
4 'nextTick'
6 'promise then'
2 'setTimeout 0'
8 'setTimeout 0'
3 'setImmediate'
2 'IO - setImmediate'
1 'IO - setTimeout 0'
```

# [setImmediate vs setTimeout](./setImmediate_vs_setTimeout.js)

Output:
```
2 'setTimeout 0'
3 'setImmediate'
```
