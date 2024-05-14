import React from "react";
import "../../SCSS/main.scss"
import "../../SCSS/componentsScss/TrainingPlan.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faPlus, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
const TrainingPlanMonday = () => {

    const [MondayInput, setMondayInput] = useState('');
    const [Monday, setMonday] = useState([]);

    const handleMondayInput = (e) => {
        setMondayInput(e.target.value)
    }

    const handleAddToMonday = (e) => {
        e.preventDefault()
        const newItem = { id: uuidv4(), name: MondayInput };
        setMonday([...Monday, newItem]);
        setMondayInput('')
        localStorage.setItem('MondayExercises', JSON.stringify([...Monday, newItem]));
    }


    useEffect(() => {
        const storedMondayExercises = localStorage.getItem('MondayExercises');
        if (storedMondayExercises) {
            setMonday(JSON.parse(storedMondayExercises));
        }
    }, []);


    const handleDelete = (id) => {
        const newList = Monday.filter(item => item.id !== id)
        setMonday(newList)
        localStorage.setItem('MondayExercises', JSON.stringify(newList))
    };


    return (
        <div>
            <h4 className="TrainingPlan_day_header">Monday</h4>
            <div>
                <input type="text" className="TrainingPlan_day_input"
                       placeholder="type the name of the exercise" value={MondayInput}
                       onChange={handleMondayInput}/>
                <button className="TrainingPlan_day_button" onClick={handleAddToMonday}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <ul className="TrainingPlan_list">
                {Monday.map(item => <li key={item.id} className="TrainingPlan_item">{item.name}
                        <button className="btn--delete" onClick={(e) => handleDelete(item.id)}>
                            <FontAwesomeIcon icon={faTrashAlt}
                                             style={{color: "red", width: '20px', height: "20px"}}/>
                        </button>
                        <button className="btn--edite">
                            <FontAwesomeIcon icon={faEdit}
                                             style={{color: "brown", width: '20px', height: "20px"}}/>
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default TrainingPlanMonday;