import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post/post';
import { Observable } from 'rxjs';
import { Get } from './get/get';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http : HttpClient) { }

  postStudentData(data : Post){
    const url = "http://localhost:3006/api/Employee"
      return this.http.post<Post>(url , data)
  }

  getEmployeeData(){
    const url = "http://localhost:3006/api/Employee"
    return this.http.get(url)
  }

  getEmployeeById(id: String){
    const url = "http://localhost:3006/api/Employee"
    return this.http.get(url + `/${id}`)
  }

  updateEmployeeById(id : String, Employee : Post){
    const url = "http://localhost:3006/api/Employee"
    return this.http.put(url + `/${id}`, Employee);
  }

  deleteEmployeeById(id : string){
    const url = "http://localhost:3006/api/Employee"
    return this.http.delete(url + `/${id}`)
  }
  
}
