export interface Transaction {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    created_at: string;
}