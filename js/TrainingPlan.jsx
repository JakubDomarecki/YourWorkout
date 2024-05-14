import "../SCSS/main.scss"
import "../SCSS/componentsScss/TrainingPlan.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
import TrainingPlanMonday from "./TrainingPlan-days/TrainingPlanMonday";

const TrainingPlan = () => {
    return (
        <>
            <div className="TrainingPlan_header">
                    <h2>Your training plan</h2>
            </div>
            <div className="TrainingPlan_main">
                <div className="TrainingPlan_days">
                   <TrainingPlanMonday day="Monday"/>
                </div>
                <div className="TrainingPlan_days">
                </div>
            </div>
        </>

    );
};
export default TrainingPlan;