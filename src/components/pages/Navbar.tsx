import { Sun, Settings } from "lucide-react";

const Navbar = ({ title }) => {
    return (
        <nav className="flex items-center justify-between border-b p-5">
            <Sun />
            <p className=" font-semibold text-xl">{title}</p>
            <Settings />
        </nav>
    );
};

export default Navbar;
