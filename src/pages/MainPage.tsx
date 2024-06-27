import ListExpense from "@/components/pages/ListExpense";
import { useAddExpense } from "@/store/store";
import { convertDate } from "../utils/formatDate.ts";

const MainPage = () => {
    const { expense } = useAddExpense((state) => state);

    const totalExpense = expense.reduce(
        (accumulator, currentItem) => accumulator + currentItem.value,
        0
    );

    const date = new Date();

    return (
        <main className="w-full flex flex-col items-center justify-center h-full gap-20">
            <p className="flex flex-col items-center gap-4">
                <span className="text-md text-gray-500">Spent this month</span>
                <span className="text-5xl font-semibold text-red-500">
                    $ -{totalExpense}
                </span>
            </p>
            <div className="w-full p-5 space-y-5">
                <div className="w-full flex justify-between items-center text-gray-400 text-lg pb-3">
                    <p>{convertDate(date)}</p>
                    <p>- {totalExpense}$</p>
                </div>
                {expense.map((ex) => (
                    <ListExpense ex={ex} key={ex.id} />
                ))}
            </div>
        </main>
    );
};

export default MainPage;
