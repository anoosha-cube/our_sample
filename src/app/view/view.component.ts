import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute ,ParamMap} from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  postId;
  // user={title:'',description:'',id:''};
  ID;
  constructor(private http:HttpClient,private route: ActivatedRoute,
    private router: Router) { 
    // this.ID = this.route.snapshot.paramMap.get('ID');
    // this.router.navigate(['/view-page',{_id}])
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   this.ID=params.get('ID');
    // this.router.navigateByUrl(`/users/detail?id=${id}`);
            // })
            // this.ID=this.comp.getID();
    this.route.queryParams.subscribe((params)=>{
      this.ID=params.ID;
      console.log(this.ID);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    // `http://172.16.4.52:2000/titleview?id=${this.ID}`
    this.http.get<any>(`http://localhost:2000/titleview/${this.ID}`,{headers}).subscribe(data => {
      this.postId = data.message;
    });
    })
  }

  ngOnInit() {
  }

}
