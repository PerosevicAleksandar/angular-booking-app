import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-salon-component',
  styleUrl: './salon-component.css',
  templateUrl: './salon-component.html',
})
export class SalonComponent {
  terms = [
    {
      clientName: "Ana Petrović",
      phone: "+381601234567",
      date: "2026-05-10",
      time: "14:00",
      service: "Hair styling",
      status: "booked"
    },
    {
      clientName: "",
      phone: "",
      date: "2026-05-10",
      time: "15:00",
      service: "Facial treatment",
      status: "available"
    },
    {
      clientName: "",
      phone: "",
      date: "2026-05-10",
      time: "16:00",
      service: "Manicure",
      status: "available"
    },
    {
      clientName: "Marija Jovanocić",
      phone: "+381641112233",
      date: "2026-05-10",
      time: "17:00",
      service: "Pedicure",
      status: "booked"
    }
  ];

  selectedTerm: any = null;
  message: string = '';

  selectTerm(term: any) {
    this.selectedTerm = term;

    if (term.status === 'booked') {
      this.message = 'This appointment is not available.';
    } else {
      this.message = '';
    }
  }

  reserveTerm() {
  if (this.selectedTerm) {
    this.selectedTerm.status = 'booked';
    this.selectedTerm.clientName = 'New Client';
    this.selectedTerm.phone = '+381640000000';
    this.message = 'Appointment successfully reserved.';
  }
}
}
