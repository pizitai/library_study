let Rx = require('rxjs/Rx');
let stream$ = Rx.Observable.create((observer) => {
  observer.next(1)
});

stream$.subscribe((data) => {
  console.log('Data', data);
})
