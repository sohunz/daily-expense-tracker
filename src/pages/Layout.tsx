import Header from "@/components/pages/Header";
import MainPage from "./MainPage";
import Footer from "@/components/pages/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col justify-between h-screen border mx-auto rounded-xl">
            <Header />
            <div className="flex-grow">
                <MainPage />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
