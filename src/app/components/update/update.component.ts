import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() locationId: number;
  constructor(private studentSevice: StudentService ) { }

//   deleteEvent(locationId: number): void {
//     console.log("xóa");
//     this.studentSevice.deleteLocation(locationId).subscribe(  
//       data => {  
//         console.log(data);  
//         //this.deleteMessage=true;  
//         // this.studentSevice.getStudentList().subscribe(data =>{  
//         //   this.students =data  
//         //   })  
//       },  
//       error => console.log(error));  
// }  
  ngOnInit(): void {
  }
}
