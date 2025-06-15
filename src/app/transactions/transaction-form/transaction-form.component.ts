import { Component, Output, EventEmitter } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent {
  type: string = 'income'
  amount: number = 0

  @Output() transactionAdded = new EventEmitter<void>()

  constructor(private transactionService: TransactionService){}

  transactions: Transaction[] = []

  async submit(): Promise<void>{
    if(this.amount <= 0 || !this.amount){
      alert('Please put a vaild number')
    }
  await this.transactionService.addTransaction(this.type, this.amount)
  this.transactions = await this.transactionService.getTransactions()

  this.transactionAdded.emit()
  this.type = 'income'
  this.amount = 0
  }
}
