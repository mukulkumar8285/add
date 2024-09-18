import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-read-contractor',
  standalone: true,
  imports: [CommonModule , FormsModule , HttpClientModule],
  templateUrl: './read-contractor.component.html',
  styleUrl: './read-contractor.component.css'
})
export class ReadContractorComponent {
  contractors: any[] = []; // Array to store contractor data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadContractors();
  }

  loadContractors(): void {
    this.http.get<any>('http://localhost:3000/api/contractor/read')
      .subscribe(
        data => {
          this.contractors = data.contractor; // Assign response to the contractors array
        },
        error => {
          console.error('Error fetching contractors:', error); // Handle error case
        }
      );
  }
  
}
