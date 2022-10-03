import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public students=[];
  postId;
  ID;
  constructor(private contactservice:ContactService,private router:Router){}

  ngOnInit() {
    console.log('##################');
    this.contactservice.getStudents().subscribe(data=>this.students=data);
    
  }

  goToPage(pageName:string, stu):void{
    this.ID = stu._id;
    console.log('********', stu);
    const navigationExtras:NavigationExtras={
      queryParams:{
        ID:this.ID
      }
    }
    // this.router.navigateByUrl(`/view-page?ID=${stu._id}`);
    this.router.navigate(['/view-page'],navigationExtras);
    console.log('********', stu._id);

   

}

// getID(){
//   return this.ID;
// }
}
