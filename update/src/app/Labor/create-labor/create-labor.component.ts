import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-labor',
  standalone: true,
  imports: [CommonModule , HttpClientModule , FormsModule],
  templateUrl: './create-labor.component.html',
  styleUrl: './create-labor.component.css'
})
export class CreateLaborComponent {

}
