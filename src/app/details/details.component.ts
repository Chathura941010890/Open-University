import { Component, OnInit } from '@angular/core';
import { EmpService} from '../emp.service'
import  { Employee} from '../employee'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public empService:EmpService,
    public route:ActivatedRoute,
    public router:Router) {this.getEmployee(); }
    employees: any;  
      ngOnInit() {
  }

  getEmployee(){
    var id = this.route.snapshot.params['id'];
    this.empService.getOne(id)
      .subscribe(res => {
          this.employees = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }
  goBack(){
    this.router.navigate(['/list'])
  }
}


