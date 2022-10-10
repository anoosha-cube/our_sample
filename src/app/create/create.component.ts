import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('f',{static:false}) createForm:NgForm
  postId;
  user={title:'',description:'',idd:''};
  idd: any;
  constructor(private router:Router,private http:HttpClient) {
    this.idd=Math.floor(Math.random()*10000);
    console.log('***', this.idd);
   }
   onSubmit(){
    console.log(this.createForm);
    this.user.idd=this.idd;
    this.user.title=this.createForm.value.title;
    this.user.description=this.createForm.value.description;
    // this.user.token=localStorage.getItem('token');
    console.log(this.user.title);
    console.log(this.user.idd);
    console.log(this.user.description);
    // console.log(this.user.token);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    this.http.post<any>('http://localhost:2000/createpost', this.user, {headers}).subscribe(data => {
      this.postId = data.id;
      // this.router.navigate(['/list-page']);
    })
    this.router.navigate(['/list-page']);
  }
  // goToPage(pageName:string):void{
  //   // this.router.navigate(['/list-page']);
  //  }

  ngOnInit() {
  }


}
