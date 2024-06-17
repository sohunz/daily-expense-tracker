import { Sun, Settings } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between border-b p-5">
            <Sun />
            <p className=" font-semibold text-xl">Expense</p>
            <Settings />
        </nav>
    );
};

export default Navbar;
