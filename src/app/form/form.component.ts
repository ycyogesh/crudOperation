import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userName : string = "";
  userMail : string = "";
  usersList : Array<any> = []

  constructor(private appService : FormsService) { }

  ngOnInit(): void {
  }
  addUser(){
    this.appService.addUser({name : this.userName,mail : this.userMail}).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
