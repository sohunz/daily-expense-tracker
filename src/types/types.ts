export interface expenseType {
    id: number;
    title: string;
    icon: string;
    value: number;
}

export interface ExpenseType {
    expense: expenseType[];
    addExpense: (value: number, icon: string, title: string) => void;
}
