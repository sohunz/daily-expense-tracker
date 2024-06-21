import { ExpenseType } from "@/types/types";
import { create } from "zustand";

export const useAddExpense = create<ExpenseType>((set) => ({
    expense: [{ id: 1, title: "Buy Coffee", icon: "🍵", value: 250 }],
    addExpense: (value: number, icon: string, title: string) =>
        set((state) => ({
            expense: [
                {
                    id: state.expense.length + 1,
                    title: title,
                    icon: icon,
                    value: value,
                },
                ...state.expense,
            ],
        })),
}));
