import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  //同步
  getData(){
    return 'this is service data'
  }
 //回调
  getCallbackData(cb:any){
    setTimeout(()=>{
      let data = 'callback'
      cb(data)
    },1000)
  }
  //promise
  getPromiseData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let data = 'promise'
        resolve(data)
      },1000)

    })

  }
  //rxjs
  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        let data = 'Rxjs'
        observer.next(data)//返回正确的数据 相当于promise的resolve(data)
        // observer.error(data)//返回错误的数据 相当于promise的reject(data)

      },2000)

    })

    /*
      从上面例子我们感觉Promise和RxJS的用法基本相似。其实Rxjs相比Promise要强大很多。
      比如Rxjs中可以中途撤回、Rxjs 可以发射多个值、Rxjs 提供了多种工具函数等等。
    */

  }

  /*
  rxjs 订阅后多次执行

  如果我们想让异步里面的方法多次执行，比如下面代码。
  这一点Promise 是做不到的，对于Promise 来说，最终结果要么resolve(兑现)、要么reject
  (拒绝)，而且都只能触发一次。如果在同一个Promise 对象上多次调用resolve 方法，
  则会抛异常。而Observable 不一样，它可以不断地触发下一一个值，就像next() 这个方法的
  名字所暗示的那样。

  let promise = new Promise(resolve => {
    setInterval(()=> {
      resolve(---promise setInterval---');
    }, 2000);
  });
  promise.then(value => console .log(value));

  */
  //rxjs 多次执行 可用于爬虫
  getRxjsIntervalData(){
    let count = 0
    return new Observable<any>((observer)=>{
      setInterval(()=>{

        let data = 'Rxjs Interval' + count++

        observer.next(data)//返回正确的数据 相当于promise的resolve(data)
        // observer.error(data)//返回错误的数据 相当于promise的reject(data)
      },1000)

    })

    /*
      从上面例子我们感觉Promise和RxJS的用法基本相似。其实Rxjs相比Promise要强大很多。
      比如Rxjs中可以中途撤回、Rxjs 可以发射多个值、Rxjs 提供了多种工具函数等等。
    */

  }

}
