# New Relic Challenge
New Relic Apdex Board challenge

#### Install project
```
npm i
```
## Commands

#### Run application
```
npm start
```
#### Generate dist folder
```
npm run build
```
#### Dev server with watcher
```
npm run watch
```
#### Test
```
npm run test
```

## Sorting algorithm

The used method to sort the Applications, is the sort impolementation of ECMAScript **Array.prototype.sort**, 
which complexity for longer arrays is O(n log(n)) since is a navitve implementation, for example V8 engine from
chrome uses a Quick sort algotithm. For more [info](https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/).

In the **sort_performance_test** branch, we can find the implementation of binary insert algorithm because the
time complexity should be lower, but after running some performance test, the native .sort implementation is faster.

### Performance test
*For each host Application array with more than 3k elements:
#### Array.prototype.sort
- Took 3.800000005867332 milliseconds.
- Took 5.000000004656613 milliseconds. 
- Took 3.000000026077032 milliseconds.
- Took 2.800000016577542 milliseconds.
- Took 0.3000000142492354 milliseconds.
- Took 0.3999999607913196 milliseconds.
- Took 0.3000000142492354 milliseconds.
- Took 0.49999996554106474 milliseconds.
- Took 0.4000000189989805 milliseconds.
- Took 0.3000000142492354 milliseconds.

#### Binary insert
- Took 9.90000000456348 milliseconds.
- Took 4.0000000153668225 milliseconds.
- Took 4.399999976158142 milliseconds.
- Took 4.400000034365803 milliseconds.
- Took 3.100000030826777 milliseconds.
- Took 2.799999958369881 milliseconds. 
- Took 1.9000000320374966 milliseconds.
- Took 2.999999967869371 milliseconds.
- Took 1.8999999738298357 milliseconds.
- Took 1.7000000225380063 milliseconds.
