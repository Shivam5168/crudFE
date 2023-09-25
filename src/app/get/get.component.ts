import { Component } from '@angular/core';
import { Get } from './get';
import { CrudService } from '../crud.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  Employee : any=[];

  constructor(private employeeService : CrudService, private router : Router){}

  ngOnInit() {
    this.getEmployeeData()
  }

  getEmployeeData(){
    debugger
    this.employeeService.getEmployeeData().subscribe((Response:any) =>{
        this.Employee = Response.data;
        console.log(this.Employee)
    })
  }
  onEditEmployeeData(id : string){
   this.router.navigate(["post",id])
  }

  onDeleteEmployeeData(id : string){
    this.employeeService.deleteEmployeeById(id).subscribe(Response =>{
      console.log(Response);
      this.ngOnInit();
    })
  }

}
