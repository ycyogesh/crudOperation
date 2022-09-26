import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userName : string = "";
  userMail : string = ""

  constructor(private appService : FormsService) { }

  ngOnInit(): void {
  }
  addUser(){
    this.appService.addUser(this.userName,this.userMail).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
