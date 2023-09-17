import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  editForm: any;
  isSubmit: boolean = false;

  user: any = []
  constructor(private fb: FormBuilder, private userInfoServices: UserInfoService) {
    this.user = userInfoServices.sendData();
    this.initForm();
  }
  initForm() {
    this.editForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    console.log("hello")
    this.editForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.emailId,
      phoneNumber: this.user.phoneNumber
    })
  }

  onEditUser(): void {
    // console.log(this.editForm.value);
    // console.log(this.editForm.value.firstName);
    this.user.firstName = this.editForm.value.firstName;
    this.user.lastName = this.editForm.value.lastName;
    this.user.email = this.editForm.value.email
    this.user.phoneNumber = this.editForm.phoneNumber;
    this.userInfoServices.upDate(this.editForm.value);
    // console.log(this.userInfoServices.sendData());
  }
}