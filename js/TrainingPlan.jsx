import "../SCSS/main.scss"
import "../SCSS/componentsScss/TrainingPlan.scss"
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
import TrainingPlanMonday from "./TrainingPlan-days/TrainingPlanMonday";
import TrainingPlanTuesday from "./TrainingPlan-days/TrainingPlanTuesday";
import TrainingPlanWednesday from "./TrainingPlan-days/TrainingPlanWednesday";
import TrainingPlanThursday from "./TrainingPlan-days/TrainingPlanThursday";
import TrainingPlanFriday from "./TrainingPlan-days/TrainingPlanFriday";
import TrainingPlanSaturday from "./TrainingPlan-days/TrainingPlanSaturday";
import TrainingPlanSunday from "./TrainingPlan-days/TrainingPlanSunday";


const TrainingPlan = () => {

    //dane z api
    const [exercises, setExercises] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //pobieranie danych z api
    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;

        fetch(`https://api.api-ninjas.com/v1/exercises?muscle`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(data => {
                setExercises(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error.message);
                setError(error.message);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div className="loading">Loading...</div>;
    } else if (error) {
        return <div className="loading">Error: {error}</div>;
    } else {
        return (
            <>
                <div className="TrainingPlan_header">
                    <h2>Your training plan</h2>
                </div>
                <div className="TrainingPlan_main">
                    <div className="TrainingPlan_days">
                        <TrainingPlanMonday/>
                        <TrainingPlanTuesday/>
                        <TrainingPlanWednesday/>
                        <TrainingPlanThursday/>
                    </div>
                    <div className="TrainingPlan_days">
                        <TrainingPlanFriday/>
                        <TrainingPlanSaturday/>
                        <TrainingPlanSunday/>
                    </div>
                    <div className="Api_exercises">
                        <h2 className="Api_exercises_header">Example exercises</h2>
                        <ul className="Api_exercises_list">
                            {exercises.map((exercise, index) => (
                                <li key={index} className="Api_exercises_item">
                                    <h3>{exercise.name}</h3>
                                    <p className="api_p"><span className="api_name">Muscle: </span>{exercise.muscle}</p>
                                    <p className="api_p"><span className="api_name">Equipment: </span>{exercise.equipment}</p>
                                    <p className="api_p"><span className="api_name">Difficulty: </span>{exercise.difficulty}</p>
                                    <p className="api_p"><span className="api_name">Instructions: </span>{exercise.instructions}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>

        );
    }
};
export default TrainingPlan;