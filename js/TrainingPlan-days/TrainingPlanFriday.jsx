import React from "react";
import "../../SCSS/main.scss"
import "../../SCSS/componentsScss/TrainingPlan.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faPlus, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
const TrainingPlanFriday = () => {

    const [FridayInput, setFridayInput] = useState('');
    const [Friday, setFriday] = useState([]);

    //to co jest teraz edytowane
    const [editingItem, setEditingItem] = useState(null);
    //nowa nazwa
    const [editedItemName, setEditedItemName] = useState('');

    //walidacja przy dodwaniu i edytowaniu
    const [errMessage, setErrMessage] = useState('');
    const [errMessageEdite, setErrMessageEdite] = useState('');


    //wartosci ktore wpisał uzytkownik
    const handleFridayInput = (e) => {
        setFridayInput(e.target.value)
    }

    //dodawanie
    const handleAddToFriday = (e) => {
        if (FridayInput === '') {
            setErrMessage("The field cannot be empty")
        } else {
            e.preventDefault()
            const newItem = { id: uuidv4(), name: FridayInput };
            setFriday([...Friday, newItem]);
            setFridayInput('')
            localStorage.setItem('FridayExercises', JSON.stringify([...Friday, newItem]));
            setErrMessage("")
        }
    }


    //pobieranie z localStorage
    useEffect(() => {
        const storedFridayExercises = localStorage.getItem('FridayExercises');
        if (storedFridayExercises) {
            setFriday(JSON.parse(storedFridayExercises));
        }
    }, []);

    //usuwanie
    const handleDelete = (id) => {
        const newList = Friday.filter(item => item.id !== id)
        setFriday(newList)
        localStorage.setItem('FridayExercises', JSON.stringify(newList))
    };

    // wartosci z inputa edytowanie
    const handleEditeInput = (e) => {
        setEditedItemName(e.target.value)
    };


    //przycisk edytowania
    const handleEdit = (item) => {
        setEditingItem(item);
        setEditedItemName(item.name);
    };

    //zapisywanie edytowania
    const handleSaveEdit = () => {
        if (editedItemName === "") {
            setErrMessageEdite('the field cannot be empty')
        } else {
            const updatedList = Friday.map(item => {
                if (item.id === editingItem.id) {
                    return { ...item, name: editedItemName };
                }
                return item;
            });
            setFriday(updatedList);
            localStorage.setItem('FridayExercises', JSON.stringify(updatedList));
            setEditingItem(null);
            setEditedItemName('');
        }
    };

    return (
        <div className="single_day">
            <h4 className="TrainingPlan_day_header">Friday</h4>
            <div>
                <input type="text" className="TrainingPlan_day_input"
                       placeholder="type the name of the exercise" value={FridayInput}
                       onChange={handleFridayInput}/>
                <button className="TrainingPlan_day_button" onClick={handleAddToFriday}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <p className="errMessage">{errMessage}</p>
            <ul className="TrainingPlan_list">
                {Friday.map(item => (
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
export default TrainingPlanFriday;