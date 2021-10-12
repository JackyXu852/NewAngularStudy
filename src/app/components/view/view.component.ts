import { Component, OnInit, ViewChild, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  @ViewChild('mydiv') mydiv:any;
  @ViewChild('news') news:any;
  @ViewChild('mybox') mybox:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;
  @Output() private outer = new EventEmitter()
  constructor() {

  }

  //组件和指令初始化完成 并不是真正的dom加载完成
  ngOnInit(): void {
    //因此当dom标签里有angular指令时，获取不到dom节点，
    //如果不存在angular，则能获取到dom节点
    //因此不建议在ngOnInit里获取dom节点

  }

  //视图加载完成以后触发的方法 dom加载完成 可以获取dom节点
  ngAfterViewInit(): void {
    console.log(this.mydiv)
    this.mydiv.nativeElement.style.width = '100px'
    this.mydiv.nativeElement.style.height = '100px'
    this.mydiv.nativeElement.style.background = 'red'

    this.news.run()
  }

  changeBox(){

    this.mybox.nativeElement.style.transform = 'translate(0,0)'

  }

  getMsg(){
    // console.log(this.msg)
    console.log(this.home.msg)
  }

  getRun(){
    // this.run()
    this.home.run()
  }

  sendParent(){
    this.outer.emit('我是子组件数据')
  }


}
