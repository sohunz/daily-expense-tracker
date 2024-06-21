import { ExpenseType } from "@/types/types";
import { create } from "zustand";

export const useAddExpense = create<ExpenseType>((set) => ({
    expense: [{ id: 1, title: "Buy Coffee", icon: "🍵", value: 250 }],
    addExpense: () => {},
}));
