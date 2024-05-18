import "../SCSS/main.scss"
import "../SCSS/componentsScss/TrainingPlan.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
import TrainingPlanMonday from "./TrainingPlan-days/TrainingPlanMonday";



const TrainingPlan = () => {
    // const [exercises, setExercises] = useState([]);
    //
    // useEffect(() => {
    //     const muscle = 'biceps';
    //     const apiKey = 'PoXag5sPExV/gSY3oU4JNA==lIFNdtTpX9HThsnO';
    //
    //     fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
    //         method: 'GET',
    //         headers: {
    //             'X-Api-Key': apiKey,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 return response.text().then(text => { throw new Error(text) });
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             setExercises(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error.message);
    //         });
    // }, []);

    return (
        <>
            <div className="TrainingPlan_header">
                    <h2>Your training plan</h2>
            </div>
            <div className="TrainingPlan_main">
                <div className="TrainingPlan_days">
                   <TrainingPlanMonday day="Monday"/>
                   <TrainingPlanMonday day="Monday"/>
                   <TrainingPlanMonday day="Monday"/>
                   <TrainingPlanMonday day="Monday"/>
                </div>
                <div className="TrainingPlan_days">
                    <TrainingPlanMonday day="Monday"/>
                    <TrainingPlanMonday day="Monday"/>
                    <TrainingPlanMonday day="Monday"/>
                </div>
                {/*<div>*/}
                {/*    <ul>*/}
                {/*        {exercises.map((exercise, index) => (*/}
                {/*            <li key={index}>*/}
                {/*                <h3>{exercise.name}</h3>*/}
                {/*                <p>Type: {exercise.type}</p>*/}
                {/*                <p>Muscle: {exercise.muscle}</p>*/}
                {/*                <p>Equipment: {exercise.equipment}</p>*/}
                {/*                <p>Difficulty: {exercise.difficulty}</p>*/}
                {/*                <p>Instructions: {exercise.instructions}</p>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </>

    );
};
export default TrainingPlan;