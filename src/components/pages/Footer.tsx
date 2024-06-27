import { PieChart, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import CreateExpense from "./Modal/CreateExpense";

const Footer = () => {
    return (
        <footer className="fixed w-full max-w-lg bottom-0 overflow-hidden flex items-center justify-between border-t px-5 py-2 z-50">
            <Link to="/analytic">
                <PieChart strokeWidth={1} />
            </Link>
            <Link to="/">
                <CreateExpense />
            </Link>
            <Link to="/notification">
                <Bell strokeWidth={1} />
            </Link>
        </footer>
    );
};

export default Footer;
