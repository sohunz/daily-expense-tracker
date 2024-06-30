// import { CategoryType } from "@/types/types";
// import { create } from "zustand";

// export const useAddCategory = create<CategoryType>((set) => ({
//     category: [
//         { id: 1, title: "Rent", icon: "🏠" },
//         { id: 2, title: "School", icon: "🏫" },
//         { id: 3, title: "Car", icon: "🚗" },
//     ],

//     addCategory: (title: string, icon: string) =>
//         set((state) => ({
//             category: [
//                 {
//                     id: state.category.length,
//                     title: title,
//                     icon: icon,
//                 },
//                 ...state.category,
//             ],
//         })),
// }));
