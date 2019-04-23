import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  readonly API_URI = 'http://localhost:8080/';

  constructor(private http : HttpClient) { }

  post(path: string, data): Observable<T> {
    return this.http.post<T>(this.API_URI + path, data, this.createHeaders());
  }

  put(path: string, data): Observable<T>{
    return this.http.put<T>(this.API_URI + path, data, this.createHeaders());
  }

  get(path: string) : Observable<T> {
    return this.http.get<T>(this.API_URI + path, this.createHeaders());
  }

  createHeaders(){
    return {headers: {'Content-Type': 'application/json'}}
  }


}
