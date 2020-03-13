import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/index/';
  


  constructor(private http: HttpClient) { }

  getLocationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'find-all');
  }

  deleteLocation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-location/${id}`, { responseType: 'text' });  
  }
}
