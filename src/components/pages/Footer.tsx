import { PieChart, Plus, Bell, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import { Input } from "../ui/input";
import { useAddExpense } from "@/store/store";
import { useState, useEffect } from "react";

const Footer = () => {
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
        } else if (getIcon === "📲") {
            setTitle("Phone");
        } else if (getIcon === "🏢") {
            setTitle("Work");
        } else if (getIcon === "💻") {
            setTitle("Computer");
        } else if (getIcon === "📗") {
            setTitle("Book");
        } else if (getIcon === "💊") {
            setTitle("Pill");
        } else {
            setTitle("");
        }
        console.log("running...");
    }, [getIcon]);

    const { addExpense } = useAddExpense((state) => state);

    return (
        <footer className="fixed w-full max-w-md bottom-0 overflow-hidden flex items-center justify-between border-t px-5 py-2 z-50">
            <Link to="/analytic">
                <PieChart strokeWidth={1} />
            </Link>
            <Link to="/">
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
                                    onChange={(e) =>
                                        setValue(Number(e.target.value))
                                    }
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
                                                    <RotateCcw
                                                        strokeWidth={1.5}
                                                    />
                                                </button>
                                            )}
                                        </button>
                                    </DrawerTrigger>

                                    <DrawerContent className="max-w-md h-[50vh]">
                                        <div className="mt-14">
                                            <ul className="grid grid-cols-4">
                                                <li className="flex items-center flex-col text-[13px] mb-10 gap-1">
                                                    <div className="border p-3 rounded-full cursor-pointer">
                                                        <Plus
                                                            strokeWidth={0.75}
                                                        />
                                                    </div>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("🏠")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                🏠
                                                            </span>
                                                            <p>Home</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("🚗")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                🚗
                                                            </span>
                                                            <p>Car</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("📲")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                📲
                                                            </span>
                                                            <p>Phone</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("🏢")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                🏢
                                                            </span>
                                                            <p>Work</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("💻")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                💻
                                                            </span>
                                                            <p>Computer</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("📗")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                📗
                                                            </span>
                                                            <p>Book</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                                <li
                                                    className="flex items-center flex-col text-[13px] gap-1"
                                                    onClick={() =>
                                                        setIcon("💊")
                                                    }
                                                >
                                                    <DrawerClose asChild>
                                                        <button className="flex flex-col items-center justify-center gap-1">
                                                            <span className="text-3xl">
                                                                💊
                                                            </span>
                                                            <p>Medicine</p>
                                                        </button>
                                                    </DrawerClose>
                                                </li>
                                            </ul>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                            <DialogFooter>
                                <div className="w-full flex justify-between">
                                    <DrawerClose asChild>
                                        <Button variant="outline">
                                            Cancel
                                        </Button>
                                    </DrawerClose>
                                    <DrawerClose asChild>
                                        <Button
                                            onClick={() => {
                                                addExpense(
                                                    getValue,
                                                    getIcon,
                                                    getTitle
                                                );

                                                setIcon("");
                                                setTitle("");
                                                setValue(0);
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </DrawerClose>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </Link>
            <Link to="/notification">
                <Bell strokeWidth={1} />
            </Link>
        </footer>
    );
};

export default Footer;
