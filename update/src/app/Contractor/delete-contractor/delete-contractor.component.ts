import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-contractor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './delete-contractor.component.html',
  styleUrls: ['./delete-contractor.component.css'],
  animations: [
    trigger('deleteAnimation', [
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]

})
export class DeleteContractorComponent {
  contractorId: string;
  apiUrl = 'http://localhost:3000/api/contractor'; // Your backend URL (without /update or /delete)

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // Getting contractor id from the route
    this.contractorId = this.route.snapshot.params['id'];
  }
  deleteContractor() {
    if (!this.contractorId) {
      alert('No Contractor ID provided!');
      return;
    }

    // URL to the DeleteContractor API
    const url = `${this.apiUrl}/delete/${this.contractorId}`;

    // Sending HTTP DELETE request to delete contractor
    this.http.delete(url)
      .subscribe(
        (response: any) => {
          console.log('Contractor deleted:', response);
          alert('Contractor deleted successfully');
        },
        (error) => {
          console.error('Error deleting contractor:', error);
          if (error.status === 400) {
            alert(error.error.message);
          } else if (error.status === 404) {
            alert('Contractor not found');
          } else {
            alert('Failed to delete contractor');
          }
        }
      );
  }
}
