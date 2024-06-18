import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
    const location = useLocation();

    const getTitle = (path: string) => {
        switch (path) {
            case "/home":
                return "Home";
            case "/analytic":
                return "Analytic";
            case "/notification":
                return "Notification";
            default:
                return "Default Title";
        }
    };
    const title = getTitle(location.pathname);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col justify-between max-w-md h-screen border mx-auto rounded-xl">
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
