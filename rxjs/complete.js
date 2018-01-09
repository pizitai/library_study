let Rx = require('rxjs/Rx');
let stream$ = Rx.Observable.create((observer) => {
    // 多次调用 observer.next(<value>)
    observer.next(12)
    observer.complete();
})
stream$.subscribe(
    (data) => console.log('Data', data),
    (error) => console.log('Error', error),
    () => {
        console.log('finished')
    })