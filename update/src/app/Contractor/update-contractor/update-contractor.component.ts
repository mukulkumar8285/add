import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';  // For [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // For HttpClient
import { CommonModule } from '@angular/common'; // Import CommonModule for basic Angular directives

@Component({
  selector: 'app-update-contractor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Import HttpClientModule directly
  templateUrl: './update-contractor.component.html',
  styleUrls: ['./update-contractor.component.css']
})
export class UpdateContractorComponent {
  contractorId: string;
  updateData: any = { email: '', phone: '' }; // Initialize with some default values or bind it to form inputs
  apiUrl = 'http://localhost:3000/api/contractor'; // Your backend URL (without /update or /delete)

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // Getting contractor id from the route
    this.contractorId = this.route.snapshot.params['id'];
  }

  // Function to update contractor
  updateContractor() {
    if (!this.contractorId) {
      alert('No Contractor ID provided!');
      return;
    }

    // URL to the UpdateContractor API
    const url = `${this.apiUrl}/update/${this.contractorId}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Sending HTTP PUT request to update contractor
    this.http.put(url, this.updateData, { headers })
      .subscribe(
        (response: any) => {
          console.log('Contractor updated:', response);
          alert('Contractor updated successfully');
        },
        (error) => {
          console.error('Error updating contractor:', error);
          if (error.status === 400) {
            alert(error.error.message);
          } else {
            alert('Failed to update contractor');
          }
        }
      );
  }

 
}
