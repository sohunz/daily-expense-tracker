import ListExpense from "@/components/pages/ListExpense";
import { useAddExpense } from "@/store/store";

const MainPage = () => {
    const { expense } = useAddExpense((state) => state);

    return (
        <main className="w-full flex flex-col items-center justify-center h-full gap-20">
            <p className="flex flex-col items-center gap-4">
                <span className="text-sm text-gray-500">Spent this month</span>
                <span className="text-5xl font-semibold text-red-500">
                    $ -200
                </span>
            </p>

            <div className="w-full p-5 space-y-5">
                {expense.map((ex) => (
                    <ListExpense ex={ex} key={ex.id} />
                ))}
            </div>
        </main>
    );
};

export default MainPage;
