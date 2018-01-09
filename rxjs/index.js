let Rx = require('rxjs/Rx');
 /**
    Rx.Observable是Observable
    Rx.Observable.create创建序列源source，创建source的方法有多个，比如of, from, fromPromise等
    observer是Observer观察者，只有在Rx.Observable.create创建方法可以获取，其他创建方法内置了observer且不可访问
    observer.next发射数据更新
    source.map其中map就是Operators的其中一个方法，方法调用返回新的source1
    source1.subscribe是订阅，即数据更新时的响应方法。同时返回订阅实例Subscription
    subscription.next立即响应（不同于发射）静态数据，此时不会经过`Operators`处理
    ! Rx.Observable.create或者Rx.Subject.create创建的source不会自动关闭，其他方式则当检测到没有序列发生变更会自动销毁source.
  */
  const source = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
  });
  const source1 = source.map(val => `hello ${val}`);
  const subscription = source1.subscribe(value => console.log(value));
  subscription.next('foo1');

  // forEach和subscribe相似，同是实现订阅效果，等到promise可以监控subscription完成和失败的异常。
  // 日志打印并没有comlete, 因为source并没有完成关闭，触发调用observer.complete()
  const promise = source1.forEach(value => console.log(value))
  promise.then(() => console.log('complete'), (err) => console.log(err));
  /**
    output: 
    hello foo
    foo1
    hello foo
    hello bar
    hello bar
  */

  /**
    new Subject创建被观察者实例，同source一样都具备subscribe方法，表示的含义和作用也一样，即发射数据变更时响应方法。
    subject.next立即发射数据变更，作用同observer.next
    注意foo1是最后输出的，是因为在创建source时指定了Rx.Scheduler.async，是异步的调度器，表示在响应数据处理时是异步执行的。
  */

 Rx.Observable.of('foo1', Rx.Scheduler.async).subscribe(value => console.log(value));

  const subject = new Rx.Subject();
  const source2 = subject.map(val => `hello ${val}`);
  const subscription1 = source1.subscribe(value => console.log(value));
  subject.next('foo');
  subscription1.next('bar');
  

  /**
    output: 
    hello foo
    bar
    foo1
  */
