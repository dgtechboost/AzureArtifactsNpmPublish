import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzureNpmNgLibService {

  constructor() { }
  
  getMessage(){
    return "this is message from super duper library from azure artifacts"
  }
}
