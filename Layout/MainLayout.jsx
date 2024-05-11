import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/MainLayout.scss"
const MainLayout = () => {

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

    return (
        <>
            <div className="main_container">
                <header>
                    <h2>YourWorkout</h2>

                    <nav>
                        <ul className="header_list">
                            <li className="list_link">
                                <CustomNavLink to="/">Home</CustomNavLink>
                            </li>
                            <li className="list_link">
                                <CustomNavLink to="/PyhiscalActivity">Physical Activity</CustomNavLink>
                            </li>
                            <li className="list_link">
                                <CustomNavLink to="TrainingPlan">Training Plan</CustomNavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Outlet/>

                <footer>
                    <div className="footer_contact">
                        <div className="footer_contact_home">
                            <ul className="header_list">
                                <li className="list_link_footer_home">
                                    <CustomNavLink to="/">Home</CustomNavLink>
                                </li>
                                <li className="list_link">
                                    <CustomNavLink to="/PyhiscalActivity">Physical Activity</CustomNavLink>
                                </li>
                                <li className="list_link">
                                    <CustomNavLink to="TrainingPlan">Training Plan</CustomNavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_contacts">
                            <p>Contact</p>
                            <p>+48 123 456 789</p>
                            <p>email: qwerty@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer_logo">
                        <h2>YourWorkout</h2>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default MainLayout;