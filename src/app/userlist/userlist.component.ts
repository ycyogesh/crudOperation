import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private aRoute : ActivatedRoute, private appService : FormsService, private router : Router) { }

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
  editUser(id : number){
      this.router.navigate(['edit-user',id],{relativeTo : this.aRoute});
    // this.getUserDetails();

  }

  deleteUser(id : number){
    this.appService.deleteUser(id).subscribe((result)=>{
      console.log(result);
      this.getUserDetails();
      
    })
  }
}
