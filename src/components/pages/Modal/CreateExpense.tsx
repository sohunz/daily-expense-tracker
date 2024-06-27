import { Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "../../ui/input";
import { useEffect, useState } from "react";
import { useAddExpense } from "@/store/store";
// import { category } from "@/data/category";
import CreateExpenseModal from "./CreateExpenseModal";
import { useAddCategory } from "@/store/category";

const CreateExpense = () => {
    const [getValue, setValue] = useState<number>(0);
    const [getIcon, setIcon] = useState<string>("");
    const [getTitle, setTitle] = useState<string>("");

    useEffect(() => {
        if (getIcon === "⛽") {
            setTitle("Gas");
        } else if (getIcon === "🏠") {
            setTitle("Home");
        } else if (getIcon === "🚗") {
            setTitle("Car");
        } else if (getIcon === "📱") {
            setTitle("Phone");
        } else if (getIcon === "🏫") {
            setTitle("School");
        } else if (getIcon === "🖥️") {
            setTitle("Computer");
        } else if (getIcon === "🍔") {
            setTitle("Food");
        } else {
            setTitle("");
        }
        console.log("running...");
    }, [getIcon]);

    const { addExpense } = useAddExpense((state) => state);
    const { category } = useAddCategory((state) => state);

    const handleAdd = () => {
        if (!getValue && !getIcon) {
            alert("Please input value and Select tage!");
        } else if (!getValue) {
            alert("Please input value");
        } else if (!getIcon) {
            alert("Please select tag!");
        } else {
            addExpense(getValue, getIcon, getTitle);
            setIcon("");
            setTitle("");
            setValue(0);
        }
    };
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="border p-4 rounded-full bg-violet-500 text-white cursor-pointer">
                        <Plus />
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-sm">
                    {/* modal */}
                    <div className="flex items-center flex-col">
                        <Input
                            type="number"
                            placeholder="0"
                            className="w-[180px] text-center border-b pb-2 outline-none text-5xl mb-7 font-semibold text-gray-600 no-spinner"
                            onChange={(e) => setValue(Number(e.target.value))}
                        />
                        <Drawer>
                            <DrawerTrigger asChild>
                                <button>
                                    {getIcon === "" ? (
                                        "Choose Icons"
                                    ) : (
                                        <button className="flex flex-row items-center justify-center gap-5 no-underline">
                                            <span className="text-2xl">
                                                {getIcon}
                                            </span>
                                            <p className="text-lg">
                                                {getTitle}
                                            </p>
                                            <RotateCcw strokeWidth={1.5} />
                                        </button>
                                    )}
                                </button>
                            </DrawerTrigger>

                            <DrawerContent className="max-w-lg h-[50vh]">
                                <div className="mt-14">
                                    <ul className="grid grid-cols-4">
                                        <li className="flex items-center flex-col text-[13px] mb-10 gap-1">
                                            <div>
                                                <CreateExpenseModal />
                                            </div>
                                        </li>
                                        {category.map((i) => {
                                            return (
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon(i.icon)
                                                    }
                                                    key={i.id}
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                {i.icon}
                                                            </span>
                                                            <p>{i.title}</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <DialogFooter>
                        <div className="w-full flex justify-between">
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Button onClick={handleAdd}>Save</Button>
                            </DrawerClose>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateExpense;
