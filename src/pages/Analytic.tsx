import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { TrendingUp, Tag } from "lucide-react";
import { useAddExpense } from "@/store/store.ts";
import { convertDate } from "../utils/formatDate.ts";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options: any = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
        },
    },
    scales: {
        y: {
            position: "right",
            ticks: {
                font: {
                    size: 10,
                },
            },
        },
    },
};

const labels = [];
for (let day = 1; day <= 15; day++) {
    labels.push(day);
}

export const data = {
    labels,
    datasets: [
        {
            label: "Spent each days",
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "#8B5CF6",
            barThickness: 10,
        },
    ],
};

const Analytic = () => {
    const { expense } = useAddExpense((state) => state);

    // get total expense
    const totalExpense = expense.reduce(
        (accumulator, currentItem) => accumulator + currentItem.value,
        0
    );

    // get the highest expense
    const highestExpense = Math.max(...expense.map((obj) => obj.value));
    const maxScoreObject = expense.find((obj) => obj.value === highestExpense);
    console.log(maxScoreObject);

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
            <Bar options={options} data={data} />
            <div className="w-full space-y-3 mt-10">
                <div className="w-full flex justify-between items-center bg-gray-900 p-3 rounded-md">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-full p-2 bg-violet-500">
                            <TrendingUp strokeWidth={1.25} />
                        </div>
                        <p className="flex flex-col gap-1">
                            Highest Spent
                            <span className="text-[13px] text-gray-500">
                                {convertDate(date)}
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-{highestExpense}$</p>
                </div>
                <div className="w-full flex justify-between items-center bg-gray-900 p-3 rounded-md">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-full p-2 bg-violet-500">
                            <Tag strokeWidth={1.25} size={20} />
                        </div>
                        <p className="flex flex-col gap-1">
                            Most Entry
                            <span className="text-[13px] text-gray-500">
                                {convertDate(date)}
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-250$</p>
                </div>
            </div>
        </div>
    );
};

export default Analytic;
