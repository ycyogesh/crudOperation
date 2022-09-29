import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm : any;

  userName: string = ""
  userMail: string = ""
  usersList: Array<any> = [];
  isUpdate: boolean = false;
  userId: number = 0;
  data: any

  constructor(private appService: FormsService, private aRoute: ActivatedRoute, private router: Router, private fb : FormBuilder) { }

  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName : [null, [Validators.required, Validators.minLength(4)]],
      userMail : [null, [Validators.required, Validators.email]]
    })

    this.aRoute.params.subscribe((data) => {

      // console.log(data);
      data.hasOwnProperty('id') ? this.isUpdate = true : this.isUpdate = false;

      if (this.isUpdate) {
        this.userId = data['id']
        this.getUserById(this.userId)
      }
    })
  }

  get form(){
    return this.userForm.controls
  }

  addUser() {
    this.appService.addUser({ name: this.form['userName'].value, mail: this.form['userMail'].value }).subscribe((data) => {
      console.log(data);
      this.router.navigate(['user-list']);
    })
  }
  getUserById(id: number) {
    this.appService.getUserById(id).subscribe((data) => {
      console.log("----------->", data);
      this.data = data
      this.userName = this.data.result[0].name
      this.userMail = this.data.result[0].email
    })
  }

  updateUser() {
    this.appService.editUser(this.userId, { 'name': this.userName, 'mail': this.userMail }).subscribe((data) => {
      console.log(data);
      this.router.navigate(['user-list']);
    })
  }
}