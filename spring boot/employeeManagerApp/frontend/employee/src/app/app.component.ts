import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employee';
  public employees?: Employee[];
  public editEmployee?: Employee;
  public deleteEmployee: any;
  

  constructor(private employeeService: EmployeeService){
 
  }
  ngOnInit(): void {
    this.getEmployee();
  }

  public getEmployee():void{
      this.employeeService.getAllEmployees().subscribe(
        (response: Employee[])=>{
            this.employees = response;
        },(error: HttpErrorResponse)=>{
        alert(error.message);
      }
      )
  }

public searchEmployee(key: string){
  if(key.length == 0){
    this.getEmployee()
  }else{
    this.employees = this.employees?.filter(employee=> employee.name.toLowerCase().includes(key) || employee.phone.toLowerCase().includes(key) || employee.jobTitle.toLowerCase().includes(key))
  }
    
}  
public onAddEmployee(addForm: NgForm):void{
  document.getElementById("add-employee-form")?.click();
  this.employeeService.addEmployee(addForm.value).subscribe(
    (response: Employee)=>{
      this.getEmployee();
      addForm.reset()
    },
    (error: HttpErrorResponse)=>{
      alert(error.message)
    }
   )
}

public onUpdateEmployee(employee: Employee):void{
console.log(employee);
  this.employeeService.updateEmployee(employee).subscribe(
    (response: Employee)=>{
      this.getEmployee();
    },
    (error: HttpErrorResponse)=>{
      alert(error.message)
    }
   )
}

public onDeleteEmployee(id: number):void{
  console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void)=>{
        this.getEmployee();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
     )
  }


  public onOpenModal(employee: any, mode:string):void{
    const container = document.getElementById("main-container")
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode== 'add'){
      button.setAttribute("data-target", '#addEmployeeModal')
    }
    if(mode== 'edit'){
      this.editEmployee = employee;
      button.setAttribute("data-target", '#updateEmployeeModal')
    }
    if(mode== 'delete'){
      this.deleteEmployee = employee;
      button.setAttribute("data-target", '#deleteEmployeeModal')
    }
    container?.appendChild(button);
    button.click()
  }
}
