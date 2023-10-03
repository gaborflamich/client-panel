import { Component } from '@angular/core';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [ClientsComponent],
})
export class DashboardComponent {}
