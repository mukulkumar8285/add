import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-create-contractor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './create-contractor.component.html',
  styleUrls: ['./create-contractor.component.css'],
  animations: [
    trigger('formSubmitAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class CreateContractorComponent {
  contractorData = { name: '', email: '', password: '', labor: '' }; // Initial contractor data
  apiUrl = 'http://localhost:3000/api/contractor';
  successMessage: string | null = null;

  constructor(private http: HttpClient) {}

  // Function to create contractor
  createContractor() {
    if (!this.contractorData.name || !this.contractorData.email || !this.contractorData.password) {
      alert('Please fill in all required fields.');
      return;
    }

    // Split labor IDs into an array and filter out empty values
    const laborIds = this.contractorData.labor
      .split(',')
      .map(id => id.trim())
      .filter(id => id !== ''); // Filter out empty strings

    const contractor = {
      ...this.contractorData,
      labor: laborIds // Assign filtered labor IDs
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Sending HTTP POST request to create contractor
    this.http.post(`${this.apiUrl}/create`, contractor, { headers })
      .subscribe(
        (response: any) => {
          this.successMessage = 'Contractor created successfully!';
          console.log('Contractor created:', response);
          alert('Contractor created successfully');
          
          // Reset the form
          this.contractorData = { name: '', email: '', password: '', labor: '' };

          // Clear success message after 3 seconds
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        },
        (error) => {
          console.error('Error creating contractor:', error);
          if (error.status === 400) {
            alert(error.error.message);
          } else {
            alert('Failed to create contractor');
          }
        }
      );
  }
}
