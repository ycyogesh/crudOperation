import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private httpClient : HttpClient) { }

  addUser(name:{ name: string; mail: string; }){
    return this.httpClient.post(environment.appUrl+"sql",name);
  }
  
  getAllUser(){
    return this.httpClient.get(environment.appUrl+"sql");
  }

  getUserById(id : number){
    return this.httpClient.get(environment.appUrl+"getRecordById/"+id)
  }

  editUser(id : number,name : any){
    return this.httpClient.put(environment.appUrl+"putData/"+id,name)
  }

  deleteUser(id : number){
    return this.httpClient.delete(environment.appUrl+"usersList/"+id)
  }
}
