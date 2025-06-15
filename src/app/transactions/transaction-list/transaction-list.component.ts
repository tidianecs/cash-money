import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnChanges {
    constructor(private transactionService: TransactionService){}
    @Input() refreshTrigger!: number;

    transactions: Transaction[] = []

    async ngOnChanges(){
      this.transactions = await this.transactionService.getTransactions();
    }

    async delTransaction(id:string){
      this.transactionService.deleteTransaction(id)
      this.transactions = await this.transactionService.getTransactions();
    }
}
