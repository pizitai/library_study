let Rx = require('rxjs/Rx');
// emit 1 from promise
const source = Rx.Observable.fromPromise(new Promise(resolve => resolve(1)));
//add 10 to the value
const example = source.map(val => val + 10);
//output: 11
const subscribe = example.subscribe(val => console.log(val));
