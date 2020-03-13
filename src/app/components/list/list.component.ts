import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Observable } from "rxjs";
import { Location } from 'src/app/model/location'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Observable<Location[]>;

  constructor(private studentSevice: StudentService) { }

  ngOnInit(): void {
    console.log('sasas');
    this.studentSevice.getLocationList().subscribe(data => {
      console.log(data);
      this.students = data.resultLocation;
    })
  }
}
