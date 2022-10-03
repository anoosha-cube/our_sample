import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  
  @ViewChild('f',{static:false}) RegisterForm:NgForm;
  constructor(private router:Router,private http: HttpClient) { }
   submitted=false;
   user={firstname:'',lastname:'',username:'',password:''};
   postId;
   onSubmit(){
    this.submitted=true;
    this.user.firstname=this.RegisterForm.value.fn;
    this.user.lastname=this.RegisterForm.value.ln;
    this.user.username=this.RegisterForm.value.us;
    this.user.password=this.RegisterForm.value.ps;
    console.log(this.user.firstname);
    console.log(this.user.lastname);
    console.log(this.user.username);
    console.log(this.user.password);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    console.log('signupppp');
    this.http.post<any>('http://localhost:2000/signup', this.user, {headers}).subscribe(data => {
      this.postId = data.id;
  })
    this.router.navigate(['/contact-form']);
    
  }

  ngOnInit() {
   
  }

}
