let Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.create((observer) => {
    observer.error('error message');
})

stream$.subscribe(
    (data) => console.log('Data', data),
    (error) => console.log('Error', error))