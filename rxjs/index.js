let Rx = require('rxjs/Rx');
let stream$ = Rx.Observable.from([1, 2, 3])

stream$.subscribe((value) => {
  console.log('Value', value);
})


let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3])
  }, 0)

})

promise.then((value) => {
  console.log('Value', value)
}).catch((err) => console.log(err))