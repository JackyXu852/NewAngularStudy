import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStorage(){
    console.log('获取getStorage()')
  }
}
