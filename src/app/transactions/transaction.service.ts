import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Transaction } from './transaction.model';

const supabaseUrl = 'https://gphegbsryuccsrfhctey.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwaGVnYnNyeXVjY3NyZmhjdGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTY5MjcsImV4cCI6MjA2NDYzMjkyN30.MBWYUwZsSZsJRMpZlj3XisoI9USWHR_Yyuq9wXp44NE'
const supabase = createClient(supabaseUrl, supabaseKey)

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor() { }

  async getBalance(): Promise<number> {
    let balance = 0;
    const { data, error } = await supabase
      .from('transactions')
      .select('*');
    if (error) {
      alert('getBalance Error: ' + error.message);
      return 0;
    }
    if (!data) {
      return 0;
    }
    let types: string[] = data.map((item: any) => item.type);
    let amounts: number[] = data.map((item: any) => item.amount);

    for (let i = 0; i < types.length; i++) {
      if (types[i] == 'income') {
        balance += amounts[i];
      } else if (types[i] == 'expense') {
        balance -= amounts[i];
      }
    }
    console.log(balance);
    return balance;
  }

  async getTransactions(): Promise<Transaction[]>{
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
    
    if (error) throw error
    return data as Transaction[]
  }

  async addTransaction(type: string, amount: number): Promise<void> {
    const {data, error} = await supabase
        .from('transactions')
        .insert([
            {type: type, amount: amount}
        ])
    if(error){
        alert("Insertion Error: " + error.message)
    }else{
        alert("Insertion Successfull")
    }
  }

  async deleteTransaction(id:string): Promise<void>{
    const {data, error} = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)
    if(error) throw error
  }
}
