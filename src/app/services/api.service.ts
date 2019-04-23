import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URI = 'http://localhost:8080/';

  constructor(private http : HttpClient) { }

  post(path, data): Observable {
    return this.http.post(this.API_URI + path, data, this.createHeaders());
  }

  createHeaders(){
    return {headers: {'Content-Type': 'application/json'}}
  }

}
