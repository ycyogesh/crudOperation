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

  getUserById(id : number){
    return this.httpClient.get("http://localhost:3000/usersList/"+id)
  }

  editUser(id : number,name : any){
    return this.httpClient.put("http://localhost:3000/usersList/"+id,name)
  }

  deleteUser(id : number){
    return this.httpClient.delete("http://localhost:3000/usersList/"+id)
  }
}
