import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TransactionListComponent,
    TransactionFormComponent
  ]
})
export class TransactionsModule { }
