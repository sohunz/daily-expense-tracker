import { Sun, LogOut, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

interface PropsType {
    title: string;
}

const Navbar = ({ title }: PropsType) => {
    const { setTheme } = useTheme();
    return (
        <nav className="flex items-center justify-between p-5">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link" size="icon">
                        <Sun
                            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            strokeWidth={1.5}
                        />
                        <Moon
                            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            strokeWidth={1}
                        />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p className=" font-semibold">{title}</p>
            <LogOut strokeWidth={1} size={20} />
        </nav>
    );
};

export default Navbar;
