import Navbar from "./Navbar";

interface PropType {
    title: string;
}

const Header = ({ title }: PropType) => {
    return (
        <header>
            <Navbar title={title} />
        </header>
    );
};

export default Header;
