import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  
  travelRequests: any[] = [];
  errorMessage: string = '';

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadTravelRequests();
  }

  loadTravelRequests(): void {
    this.requestService.getTravelRequests().subscribe({
      next: (data) => {
        this.travelRequests = data;
      },
      error: (err) => {
        this.errorMessage = "Failed to load travel requests.";
        console.error(err);
      }
    });
  }
}
