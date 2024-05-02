import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/comments'>Comments</Link>
        </nav>
    );
};

export default Header;