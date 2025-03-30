import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:8000/requests/';  // Your Django backend URL

  constructor(private http: HttpClient) {}

  getTravelRequests(): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    // Ensure token is available before setting headers
    const headers = token
      ? new HttpHeaders().set('Authorization', `Token ${token}`)
      : new HttpHeaders();

    return this.http.get(`${this.baseUrl}`, { headers });
  }
}

