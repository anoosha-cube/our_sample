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
   user={username:'',password:''};
   onSubmit(){
    this.submitted=true;
    this.user.username=this.contactForm.value.email;
    this.user.password=this.contactForm.value.ps;
    console.log(this.user.username);
    console.log(this.user.password);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.post<any>('http://localhost:2000/listall', this.user, {headers}).subscribe(data => {
      console.log('*********', data);
      this.postId = data.id;
      // localStorage.setItem('token',data.token);
      alert("login successfully");
      
    });
    this.router.navigate(['/list-page']);

   }
  ngOnInit() {
   
  }

}
