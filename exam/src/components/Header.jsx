import { Link } from "react-router-dom";

const Header = () => (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-lg">Translator</h1>
        <nav>
            <Link to="/" className="mr-10">
                Home
            </Link>
            <Link to="/history">History</Link>
        </nav>
    </header>
);

export default Header;
