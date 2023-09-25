import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators  } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  
  postForm : FormGroup;
  id : any = this.route.snapshot.paramMap.get('id')
  constructor(private fb : FormBuilder, private employeeService : CrudService, private router : Router, private route : ActivatedRoute) {
    this.postForm = this.fb.group({
        name : ['', Validators.required],
        contact : ['', Validators.required],
        email : ['', Validators.required],
        bloodGroup : ['', Validators.required],
        age : [ , Validators.required]
        
    })
  }
ngOnInit(){
  
  this.employeeService.getEmployeeById(this.id).subscribe((Response : any) => {
    console.log(Response)
    this.postForm.patchValue({
      name : Response.data.name,
      contact : Response.data.contact,
      email : Response.data.email,
      bloodGroup : Response.data.bloodGroup,
      age : Response.data.age
    })
  })
}
  
  onSubmit(){
    debugger
    if(this.postForm.valid){
    if(this.id == '' || this.id == null){
      this.employeeService.postStudentData(this.postForm.value).subscribe(Response =>{
        //console.log(Response)
        this.router.navigate(['get'])
      }), (Error : any) => {console.log(Error)};
    }else{
      this.employeeService.updateEmployeeById(this.id, this.postForm.value).subscribe(Response =>{
        //console.log(Response);
        this.router.navigate(['get']) 
      })
    }}
    else{
       console.log("---");
       
    }

    
  
  }
}
