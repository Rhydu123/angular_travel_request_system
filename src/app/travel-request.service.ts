import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {
  private apiUrl = 'http://localhost:8000/requests/add/';  // Directly using the URL

  constructor(private http: HttpClient) {}

  submitTravelRequest(requestData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, requestData);
  }
}
