import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = 'https://5fd3863ae9cda40016f5b5e0.mockapi.io/api/v1/topic';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  get(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  create(data): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  edit(id, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  deleteSelected() {
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }
  findByName(name): Observable<any> {
    return this.http.get(`${this.apiUrl}?name=${name}`)
  }
}
