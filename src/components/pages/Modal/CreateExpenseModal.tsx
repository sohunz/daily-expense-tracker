import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DrawerClose } from "@/components/ui/drawer";
import { Input } from "../../ui/input";
import { useState } from "react";
import useCustomToast from "@/hooks/useCustomToast";
import axios from "axios";

const CreateExpenseModal = () => {
    const [getIcon, setIcon] = useState<string>("");
    const [getTitle, setTitle] = useState<string>("");
    const [isOpen, setOpen] = useState(false);

    const addData = {
        title: getTitle,
        icon: getIcon,
    };

    const inputTitleAndIcon = useCustomToast("Please input Title and Icon!");
    const inputTitle = useCustomToast("Please input Title!");
    const inputIcon = useCustomToast("Please input Icon!");
    const success = useCustomToast("Category has been created!");

    const handleAdd = () => {
        if (!getTitle && !getIcon) {
            inputTitleAndIcon();
            setOpen(false);
            setTitle("");
            setIcon("");
        } else if (!getTitle) {
            inputTitle();
            setOpen(false);
            setTitle("");
            setIcon("");
        } else if (!getIcon) {
            inputIcon();
            setOpen(false);
            setTitle("");
            setIcon("");
        } else {
            axios.post("http://localhost:8080/api/category", addData);
            setOpen(false);
            setTitle("");
            setIcon("");
            success();
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="border p-3 rounded-full cursor-pointer"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <Plus strokeWidth={0.75} />
                    </div>
                </DialogTrigger>
                <div
                    className={
                        isOpen
                            ? " absolute w-full h-screen inset-0 bg-black bg-opacity-80"
                            : ""
                    }
                ></div>
                <DialogContent className="max-w-sm">
                    {/* modal */}
                    <div className="flex items-center flex-col">
                        <Input
                            type="text"
                            placeholder="Title"
                            className="w-[180px] text-center border-b pb-2 outline-none text-3xl mb-10 font-semibold text-gray-600 no-spinner"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Icon"
                            className="w-[180px] text-center border-b pb-2 outline-none text-3xl mb-7 font-semibold text-gray-600 no-spinner"
                            onChange={(e) => setIcon(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <div className="w-full flex justify-between">
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Button onClick={handleAdd}>Add</Button>
                            </DrawerClose>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateExpenseModal;
