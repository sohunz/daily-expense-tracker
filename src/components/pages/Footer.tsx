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

const Footer = () => {
    return (
        <footer className="w-full overflow-hidden flex items-center justify-between border-t px-5 py-2">
            <Link to="/analytic">
                <PieChart />
            </Link>
            <Link to="/home" className=" overflow-hidden">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="border p-4 rounded-full bg-violet-500 text-white cursor-pointer">
                                <Plus />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <div className="flex items-center flex-col">
                                <p className="text-4xl font-semibold pb-3">0</p>
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline">
                                            Select tage
                                        </Button>
                                    </DrawerTrigger>

                                    <DrawerContent className="max-w-md h-[50vh]">
                                        <div>
                                            <ul>
                                                <li>Home</li>
                                                <li>School</li>
                                                <li>Game</li>
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
                <Bell strokeWidth={2.5} />
            </Link>
        </footer>
    );
};

export default Footer;
