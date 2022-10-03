import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IStudent} from './student';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //  private ur:string="/assets/data/students.json";
  private ur:string="http://localhost:2000/listall";
  constructor(private http:HttpClient) { }
  //  getStudents():Observable<IStudent[]>{
  //    return this.http.get<IStudent[]>(this.ur);
  //  }
  getStudents():any{
    return this.http.get(this.ur);
  }
}
