import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private httpClient : HttpClient) { }

  addUser(name:{ name: string; mail: string; }){
    return this.httpClient.post("http://localhost:3000/usersList",name);
  }
  
  getAllUser(){
    return this.httpClient.get("http://localhost:3000/usersList");
  }
}
