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

    //to co jest teraz edytowane
    const [editingItem, setEditingItem] = useState(null);

    //nowa nazwa
    const [editedItemName, setEditedItemName] = useState('');

    //walidacja przy dodwaniu i edytowaniu
    const [errMessage, setErrMessage] = useState('');
    const [errMessageEdite, setErrMessageEdite] = useState('');



    //wartosci ktore wpisał uzytkownik
    const handleMondayInput = (e) => {
        setMondayInput(e.target.value)
    }

    //dodawanie
    const handleAddToMonday = (e) => {
        if (MondayInput === '') {
            setErrMessage("The field cannot be empty")
        } else {
            e.preventDefault()
            const newItem = { id: uuidv4(), name: MondayInput };
            setMonday([...Monday, newItem]);
            setMondayInput('')
            localStorage.setItem('MondayExercises', JSON.stringify([...Monday, newItem]));
            setErrMessage("")
        }
    }


    //pobieranie z localStorage
    useEffect(() => {
        const storedMondayExercises = localStorage.getItem('MondayExercises');
        if (storedMondayExercises) {
            setMonday(JSON.parse(storedMondayExercises));
        }
    }, []);

    //usuwanko
    const handleDelete = (id) => {
        const newList = Monday.filter(item => item.id !== id)
        setMonday(newList)
        localStorage.setItem('MondayExercises', JSON.stringify(newList))
    };

    // wartosci z inputa edytowanie
    const handleEditeInput = (e) => {
        setEditedItemName(e.target.value)
    };


    //do przycsisku edtyowanie
    const handleEdit = (item) => {
        setEditingItem(item);
        setEditedItemName(item.name);
    };

    //za[isywanie
    const handleSaveEdit = () => {
        if (editedItemName === "") {
            setErrMessageEdite('the field cannot be empty')
        } else {
            const updatedList = Monday.map(item => {
                if (item.id === editingItem.id) {
                    return { ...item, name: editedItemName };
                }
                return item;
            });
            setMonday(updatedList);
            localStorage.setItem('MondayExercises', JSON.stringify(updatedList));
            setEditingItem(null);
            setEditedItemName('');
        }
    };

    return (
        <div className="single_day">
            <h4 className="TrainingPlan_day_header">Monday</h4>
            <div>
                <input type="text" className="TrainingPlan_day_input"
                       placeholder="type the name of the exercise" value={MondayInput}
                       onChange={handleMondayInput}/>
                <button className="TrainingPlan_day_button" onClick={handleAddToMonday}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <p className="errMessage">{errMessage}</p>
            <ul className="TrainingPlan_list">
                {Monday.map(item => (
                    <li key={item.id} className="TrainingPlan_item">
                        {editingItem && editingItem.id === item.id ? (
                            <>
                                <div>
                                    <input
                                        className="TrainingPlan_day_input"
                                        type="text"
                                        value={editedItemName}
                                        onChange={handleEditeInput}
                                    />
                                    <button className="save_btn" onClick={handleSaveEdit}>
                                        <FontAwesomeIcon icon={faSave}
                                                         style={{color: "4040ff", width: '20px', height: "20px"}}/>
                                    </button>
                                </div>
                                <p className="errMessage"> {errMessageEdite}</p>
                            </>
                        ) : (
                            <>
                                {item.name}
                                <button className="btn--delete" onClick={() => handleDelete(item.id)}>
                                    <FontAwesomeIcon icon={faTrashAlt}
                                                     style={{color: "red", width: '20px', height: "20px"}}/>
                                </button>
                                <button className="btn--edit" onClick={() => handleEdit(item)}>
                                    <FontAwesomeIcon icon={faEdit}
                                                     style={{color: "brown", width: '20px', height: "20px"}}/>
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TrainingPlanMonday;