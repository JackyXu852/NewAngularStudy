import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  constructor() {
    this.message = '哈哈'

    console.log('获取message的值',this.message)
  }

  title = '我是一个新闻组件--ts'

  public num:number = 123

  // public arr:[] = [1,2,3]

  public obj:{a:number,b:string} = {a:1,b:'b'}
  // public obj:object = {a:1,b:'b'}//报错

  public arr:number[] = [1,2,3]

  public message:string

  public newArr = [
    {
      username:'李四',
      age:24,
    },
    {
      username:'王五',
      age:25,
    },
    {
      username:'徐大炮',
      age:26,
    },
  ]

  public flag:Boolean = false

  public orderStatus:number = 3
  public myColor:string = 'red'

  public content:string = "<h1>我是h1标签</h1>"

  public myDate:any = new Date()

  ngOnInit(): void {
  }

  run():void{
    console.log('触发了news中derun()方法')
  }

}
