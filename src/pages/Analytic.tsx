import { TrendingUp, Tag } from "lucide-react";
import { formatDate } from "../utils/formatDate.ts";
import ChartData from "@/chart/ChartData.tsx";
import useFetchExpense from "@/hooks/useFetchExpense.tsx";

const Analytic = () => {
    const expense = useFetchExpense();

    // get total expense
    const totalExpense = expense.reduce(
        (accumulator, currentItem) =>
            accumulator + parseInt(currentItem.value, 10),
        0
    );

    // get the highest expense
    const highestValueExpense = expense.reduce(
        (max, expense) => (expense.value > max.value ? expense : max),
        expense[0]
    );

    const date = new Date();
    return (
        <div className=" px-5 mt-10">
            <p className="flex flex-col gap-2 mb-5">
                <span className="text-red-500 text-5xl font-semibold">
                    $ -{totalExpense}
                </span>
                <span className="text-gray-500 text-[15px]">
                    Total spent this month
                </span>
            </p>
            <ChartData />
            <div className="w-full space-y-3 mt-10">
                <div className="w-full flex justify-between items-center bg-secondary p-3 rounded-md">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-full p-2 bg-violet-500 text-white">
                            <TrendingUp strokeWidth={1.25} />
                        </div>
                        <p className="flex flex-col gap-1">
                            Highest Spent
                            <span className="text-[13px] ">
                                {formatDate(highestValueExpense?.created)}
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">
                        -{" "}
                        {highestValueExpense?.value > 0
                            ? highestValueExpense?.value
                            : 0}
                        $
                    </p>
                </div>
                <div className="w-full flex justify-between items-center bg-secondary p-3 rounded-md">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-full p-2 bg-violet-500 text-white">
                            <Tag strokeWidth={1.25} size={20} />
                        </div>
                        <p className="flex flex-col gap-1 ">
                            Most Entry
                            <span className="text-[13px] ">10 June 2024</span>
                        </p>
                    </div>
                    <p className="text-red-500">-250$</p>
                </div>
            </div>
        </div>
    );
};

export default Analytic;
