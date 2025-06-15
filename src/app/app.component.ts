import { Component, ViewChild } from '@angular/core';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cashmoney-classic';
  @ViewChild('list') listComponent!: TransactionListComponent;
  refreshCounter = 0;
  refreshList(){
    this.refreshCounter++;
  }
}
