// import { ExpenseType } from "@/types/types";
// import { create } from "zustand";

// const date = new Date();

// export const useAddExpense = create<ExpenseType>((set) => ({
//     expense: [
//         {
//             id: 1,
//             title: "Coffee",
//             icon: "🍵",
//             value: 12,
//             created: date,
//         },
//     ],
//     addExpense: (value: number, icon: string, title: string) =>
//         set((state) => ({
//             expense: [
//                 {
//                     id: state.expense.length + 1,
//                     title: title,
//                     icon: icon,
//                     value: value,
//                     created: new Date(),
//                 },
//                 ...state.expense,
//             ],
//         })),
// }));
