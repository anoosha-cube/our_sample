import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('f',{static:false}) contactForm:NgForm;
  constructor(private router:Router,private http:HttpClient) { }
   goToPage(pageName:string):void{
    this.router.navigate(['/register-form']);
   }

   postId;
  submitted=false;
   user={email:'',password:''};
   onSubmit(){
    this.submitted=true;
    this.user.email=this.contactForm.value.email;
    this.user.password=this.contactForm.value.ps;
    console.log(this.user.email);
    console.log(this.user.password);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.post<any>('http://172.16.4.178:2000/login', this.user, {headers}).subscribe(data => {
      this.postId = data.id;
    })

   }
  ngOnInit() {
   
  }

}
