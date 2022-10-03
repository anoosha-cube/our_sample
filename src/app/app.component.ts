
import { Component ,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // @ViewChild('f',{static:false}) signupForm:NgForm;
  // answer='';
  // //genders=['male','female'];
  // user={username:'',email:'',secret:'',queans:'',gender:''};
  // submitted=false;
  // suggestUserName(){
  //   const suggestedName='Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,email:''
    //   },
    //   secret:'pet',queans:'',gender:'female'
    // });
    //setValue is used to set all data but
    //patchValue is used for some part of data
  //   this.signupForm.form.patchValue({
  //     userData:{username:suggestedName}
  //   });
  // }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  // for onsubmit(f)
  // onSubmit(){
  //   this.submitted=true;
  //   this.user.username=this.signupForm.value.userData.username;
  //   this.user.email=this.signupForm.value.userData.email;
  //   this.user.secret=this.signupForm.value.secret;
  //   this.user.queans=this.signupForm.value.queans;
  //   this.user.gender=this.signupForm.value.gender;

  //   this.signupForm.reset();
  // }
  // postId;
  // constructor(private http:HttpClient){}
  // ngOnInit(){
  //   this.http.post<any>('',{title:'to test...'}).subscribe(data=>{
  //     this.postId=data.id;
  //   })
  // }

  
  
  
  ngOnInit(){
    // this.router.navigate(['view-page']);
    
  }
}
