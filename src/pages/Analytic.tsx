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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
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

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

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
    return (
        <div className=" px-5 mt-10">
            <p className="flex flex-col gap-2 mb-5">
                <span className="text-red-500 text-5xl font-semibold">
                    $ -250
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
                                Mon June 20 2024
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-250$</p>
                </div>
                <div className="w-full flex justify-between items-center bg-gray-900 p-3 rounded-md">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-full p-2 bg-violet-500">
                            <Tag strokeWidth={1.25} size={20} />
                        </div>
                        <p className="flex flex-col gap-1">
                            Most Entry
                            <span className="text-[13px] text-gray-500">
                                Mon June 18 2024
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
