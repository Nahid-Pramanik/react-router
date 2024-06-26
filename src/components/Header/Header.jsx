import './Header.css'
import ActiveLink from "../ActiveLink/ActiveLink";


const Header = () => {
    return (
        <nav>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to='/comments'>Comments</ActiveLink>
        </nav>
    );
};

export default Header;