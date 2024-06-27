import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
    const location = useLocation();

    const getTitle = (path: string) => {
        switch (path) {
            case "/":
                return "EXPENSE";
            case "/analytic":
                return "ANALYTIC";
            case "/notification":
                return "CHANGE LOGS";
            default:
                return "Default Title";
        }
    };
    const title = getTitle(location.pathname);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col justify-between max-w-md h-screen  mx-auto rounded-xl border">
                <Header title={title} />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
