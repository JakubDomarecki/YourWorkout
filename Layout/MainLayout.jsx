import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/MainLayout.scss"
import CustomNavLink from "../js/CustomNavLink";
import { faHome, faRunning, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const MainLayout = () => {

    return (
        <>
            <div className="main_container">
                <header>
                    <h2>YourWorkout</h2>
                    <nav>
                        <ul className="header_list">
                            <li className=" list_link">
                                <CustomNavLink to="/">
                                    <FontAwesomeIcon icon={faHome}/> Home
                                </CustomNavLink>
                            </li>
                            <li className="list_link">
                                <CustomNavLink to="/PyhiscalActivity">
                                    <FontAwesomeIcon icon={faRunning}/>Physical Activity
                                </CustomNavLink>
                            </li>
                            <li className="list_link">
                                <CustomNavLink to="TrainingPlan">
                                    <FontAwesomeIcon icon={faClipboardList}/> Training Plan
                                </CustomNavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Outlet/>

                <footer>
                    <div className="footer_contact">
                        <div className="footer_contact_home">
                            <ul className="header_list">
                                <li className=" list_link">
                                    <CustomNavLink to="/">
                                        <FontAwesomeIcon icon={faHome} /> Home
                                    </CustomNavLink>
                                </li>
                                <li className="list_link">
                                    <CustomNavLink to="/PyhiscalActivity">
                                        <FontAwesomeIcon icon={faRunning}/>Physical Activity
                                    </CustomNavLink>
                                </li>
                                <li className="list_link">
                                    <CustomNavLink to="TrainingPlan">
                                        <FontAwesomeIcon icon={faClipboardList} /> Training Plan
                                    </CustomNavLink>
                                </li>
                            </ul>
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