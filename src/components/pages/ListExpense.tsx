import { expenseType } from "@/types/types";
import { formatTime } from "../../utils/formatTime.js";

interface PropsType {
    ex: expenseType;
}

const ListExpense = ({ ex }: PropsType) => {
    return (
        <div className="w-full flex justify-between items-center" key={ex.id}>
            <div className="flex items-center gap-3">
                <p className="text-3xl">{ex.icon}</p>
                <p className="flex flex-col gap-1">
                    {ex.title}
                    <span className="text-[13px] text-gray-500">
                        {formatTime(ex.createdAt)}
                    </span>
                </p>
            </div>
            <p className="text-red-500">-{ex.value}$</p>
        </div>
    );
};

export default ListExpense;
