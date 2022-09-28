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
   user={firstname:'',lastname:'',email:'',password:''};
   postId;
   onSubmit(){
    this.submitted=true;
    this.user.firstname=this.RegisterForm.value.fn;
    this.user.lastname=this.RegisterForm.value.ln;
    this.user.email=this.RegisterForm.value.us;
    this.user.password=this.RegisterForm.value.ps;
    console.log(this.user.firstname);
    console.log(this.user.lastname);
    console.log(this.user.email);
    console.log(this.user.password);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.post<any>('http://172.16.4.178:2000/signup', this.user, {headers}).subscribe(data => {
      this.postId = data.id;
  })
    this.router.navigate(['/contact-form']);
    
  }

  ngOnInit() {
   
  }

}
