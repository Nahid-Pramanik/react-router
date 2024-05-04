import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './ActiveLink.css';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "active" : ""}
    >
      {children}
    </NavLink>
  );
};

ActiveLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string
}

export default ActiveLink;