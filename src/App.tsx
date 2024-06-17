import { Outlet } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";

const App = () => {
    return (
        <div className="flex flex-col justify-between h-screen border mx-auto rounded-xl">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
