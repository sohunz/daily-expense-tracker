import { Bar } from "react-chartjs-2";
import { useAddExpense } from "@/store/store.ts";
import { convertShortDate } from "../utils/formatDate.ts";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options: any = {
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

const ChartData = () => {
    const { expense } = useAddExpense((state) => state);

    const aggregatedData = expense.reduce((acc: any, point) => {
        const date = new Date(point.created).toLocaleDateString("en-US");
        const convertData = convertShortDate(date);
        if (!acc[convertData]) {
            acc[convertData] = 0;
        }
        acc[convertData] += point.value;
        return acc;
    }, {});

    const labels = Object.keys(aggregatedData);
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Daily Expenses",
                backgroundColor: "#8B5CF6",
                barThickness: 10,
                data: labels.map((date) => aggregatedData[date]),
            },
        ],
    };
    return <Bar options={options} data={data} />;
};

export default ChartData;
