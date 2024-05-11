import {NavLink} from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) =>
                isActive
                    ? { color: "black", fontSize: "22px" }
                    : { color: "gray", fontSize: "22px" }
            }
        >
            {children}
        </NavLink>
    );
};
export default CustomNavLink;