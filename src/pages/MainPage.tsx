import ListExpense from "@/components/pages/ListExpense";
import useFetchExpense from "@/hooks/useFetchExpense";

const MainPage = () => {
    const expense = useFetchExpense();

    const totalExpense = expense.reduce(
        (accumulator, currentItem: any) =>
            accumulator + parseInt(currentItem.value, 10),
        0
    );

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
                    <p>28 Jun, 2024</p>
                    <p>- {totalExpense}$</p>
                </div>
                {expense.map((ex) => (
                    <ListExpense ex={ex} />
                ))}
            </div>
        </main>
    );
};

export default MainPage;
