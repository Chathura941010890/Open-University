import { Component, OnInit } from '@angular/core';
import { EmpService} from '../emp.service'
import  { Employee} from '../employee'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public empService:EmpService)  { 
    this.getEmployees();
  }
  employees: any;  
  ngOnInit() {}

  getEmployees() {
    this.empService.getAllEmployees()
      .subscribe(res => {
          this.employees = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
  deleteEmployee(id){
    this.empService.deleteEmployee(id)
      .subscribe(()=>{
        this.getEmployees();
      });
  }
}
