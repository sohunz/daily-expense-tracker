import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

const App = () => {
    const location = useLocation();

    const getTitle = (path) => {
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
        <div className="flex flex-col justify-between h-screen border mx-auto rounded-xl">
            <Header title={title} />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
