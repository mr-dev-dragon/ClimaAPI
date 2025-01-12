import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss'], // Optional, if you want styles
})
export class ApiDataComponent implements OnInit {
  data: any;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getData<any>('your-endpoint').subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching data.';
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }
}
