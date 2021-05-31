import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzureNpmNgLibService {

  constructor() { }
  
  getMessage(){
    return "wow what an update! is it the font or a colour :-D"
  }
}
