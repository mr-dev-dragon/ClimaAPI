import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',  // Ensures ApiService is available app-wide
})
export class ApiService {
    private baseUrl = 'http://127.0.0.1:8000/';  // Your backend API URL

    constructor(private http: HttpClient) { }

    // Generic method to fetch data
    getData<T>(endpoint: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${endpoint}`);
    }
}
