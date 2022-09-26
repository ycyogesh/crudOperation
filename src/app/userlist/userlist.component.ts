import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private aRoute : ActivatedRoute, private appService : FormsService) { }

  usersList : any;

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.appService.getAllUser().subscribe((data)=>{
      console.log(data);
      this.usersList = data 
    })
  }
}
