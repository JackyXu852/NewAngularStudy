import { Component, OnInit } from '@angular/core';
import { RequestService }  from '../../services/request/request.service'
@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor(
    public request:RequestService
  ) {

  }

  public msg:string = '我是父组件的sex'

  ngOnInit(): void {
    //同步获取数据
    let data = this.request.getData()
    console.log('data',data)

    //回调获取异步数据
    this.request.getCallbackData((callbackData:any)=>{
      console.log('callbackData',callbackData)
    })

    //promise获取异步数据
    let promiseData = this.request.getPromiseData()
    promiseData.then((data)=>{

      console.log('promiseData',data)

    })

    //rxjs获取异步数据

    // let rxjsData = this.request.getRxjsData()
    //  rxjsData.subscribe((data)=>{
    //   console.log('rxjsData',data)
    // })

    //rxjs 中途撤回
    /*
      Promise的创建之后，动作是无法撤回的。Observable 不一一样，动作可以通过unsbscribe() 方
      法中途撤回，而且Observable在内部做了智能的处理.
     */
    let rxjsData = this.request.getRxjsData()
    let b = rxjsData.subscribe((data)=>{
      console.log('rxjsData',data)
    })

    setTimeout(()=>{
      b.unsubscribe()
    },1000)

    //rxjs 多次执行
    let stream = this.request.getRxjsIntervalData()
    stream.subscribe((streamData)=>{
      console.log('streamData',streamData)
    })





  }

  run(){
    console.log('执行了父组件的run()方法')
  }
  hanleOuter(){
    console.log('子组件传入父组件的值')
    console.log('我是父组件的hanleOuter方法')
  }


}
