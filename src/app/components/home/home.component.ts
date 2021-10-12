import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";

// import  { StorageService } from '../../services/storage.service'

let storage = new StorageService()

// storage.getStorage()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public s:StorageService
  constructor(

  ) {
    // s.getStorage()

    storage.getStorage()
  }

  public userName:string = 'aa';

  ngOnInit(): void {

  }
  submitForm():void {
    this.userName = '张三'
  }
}
