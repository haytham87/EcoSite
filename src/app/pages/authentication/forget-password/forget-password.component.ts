import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  @ViewChild('forgetPasswordForm', { static: false }) forgetPasswordForm: NgForm | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
