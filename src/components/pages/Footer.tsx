import { PieChart, Plus, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "../ui/input";

// bg-[#030712]
const Footer = () => {
    return (
        <footer className="fixed w-full max-w-md bottom-0  overflow-hidden flex items-center justify-between border-t px-5 py-2 z-50">
            <Link to="/analytic">
                <PieChart strokeWidth={1} />
            </Link>
            <Link to="/home">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="border p-4 rounded-full bg-violet-500 text-white cursor-pointer">
                                <Plus />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            {/* modal */}
                            <div className="flex items-center flex-col">
                                <Input
                                    defaultValue={0}
                                    className="w-[180px] text-center border-b pb-2 outline-none text-5xl mb-5 font-semibold text-gray-600"
                                />
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline-none">
                                            Choose Icons
                                        </Button>
                                    </DrawerTrigger>

                                    <DrawerContent className="max-w-md h-[50vh]">
                                        <div className="mt-14">
                                            <ul className="grid grid-cols-4">
                                                <li className="flex items-center flex-col text-[13px] mb-10 gap-1">
                                                    <div className="border p-3 rounded-full  text-white cursor-pointer">
                                                        <Plus size={20} />
                                                    </div>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        🏠
                                                    </span>
                                                    <p>Home</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        🚗
                                                    </span>
                                                    <p>Car</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        📲
                                                    </span>
                                                    <p>Phone</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        🏢
                                                    </span>
                                                    <p>Work</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        💻
                                                    </span>
                                                    <p>Computer</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        📗
                                                    </span>
                                                    <p>Book</p>
                                                </li>
                                                <li className="flex items-center flex-col text-[13px] gap-1">
                                                    <span className="text-3xl">
                                                        💊
                                                    </span>
                                                    <p>Madichine</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                            <DialogFooter>
                                <div className="w-full flex justify-between">
                                    <Button>Cancel</Button>
                                    <Button type="submit">Save</Button>
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
