import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  login = this.formBuilder.group({
    emailid: '',
    password: ''
  });

  constructor(
   
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    
  }

  onSubmit(): void {

   
    console.log('login', this.login.value);
  
  }
}
