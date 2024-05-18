import React, {useEffect, useState} from "react";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/physicalActivity.scss"
import { v4 as uuidv4 } from 'uuid'; // Import funkcji generującej UUID
import { faEdit, faPlus, faTimes, faEyeSlash, faEye, faTrashAlt,faHome, faRunning, faClipboardList} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PhysicalActivity = () => {
    //formularz
    const [formData, setFormData] = useState({
        date: '',
        exercise: '',
        series: 0,
        weight: 0,
        repetitions: 0
    });

    //wpisy
    const [entries, setEntries] = useState([]);
    //errMessage
    const [errMsg, setErrMsg] = useState("");
    const [errMsgOFF, setErrMsgOFF] = useState(false);


    //pokazuje formularz
    const [isShow, setIsShow] = useState(true);


    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);


    // pobieirane z localStorage podczas montowania komponentu
    useEffect(() => {
        const storedEntries = localStorage.getItem('entries');
        if (storedEntries) {
            setEntries(JSON.parse(storedEntries));
        }
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.date === "" || formData.exercise === ""|| formData.series === "" || formData.weight === "" || formData.repetitions === "") {
            setErrMsg('All fields are required.');
        } else if (formData.series <= 0 || formData.weight <= 0 || formData.repetitions <= 0) {
            setErrMsg('Series, weight, and repetitions must be greater than 0.');
        } else {
            setErrMsg("");
            setErrMsgOFF(false);

            if (isEditing) {
                const updatedEntries = entries.map(entry =>
                entry.id === editId ? {...formData, id: editId} : entry
                );
                setEntries(updatedEntries);
                localStorage.setItem('entries', JSON.stringify(updatedEntries));
                setIsEditing(false);
                setEditId(null);
            } else {
                const newEntry = {...formData, id: uuidv4()};

                setEntries(prevState => [...prevState, newEntry])

                localStorage.setItem('entries', JSON.stringify([...entries, newEntry]));
            }

            setFormData({
                date: '',
                exercise: '',
                series: 0,
                weight: 0,
                repetitions: 0
            });
        }
    };

    const handleDelete = (id) => {
        const newEntries = entries.filter(entry => entry.id !== id);
        setEntries(newEntries);
        localStorage.setItem('entries', JSON.stringify(newEntries))
    }

    const handleEdit = (entry) => {
        setIsEditing(true);
        setEditId(entry.id);
        setFormData({
            date: entry.date,
            exercise: entry.exercise,
            series: entry.series,
            weight: entry.weight,
            repetitions: entry.repetitions,
        });
        setIsShow(true);
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditId(null);
        setFormData({
            date: '',
            exercise: '',
            series: 0,
            weight: 0,
            repetitions: 0
        });
    };

    const handleToogleButtonShow = () => {
        if(isShow){
            setIsShow(false)
        } else {
            setIsShow(true)
        }
    };

    return (
        <div className="PhysicalActivityBody">

            <q className="q_description">
                There are no secrets to success. It is the result of preparation, hard work, and learning from failure.
            </q>

            <h2 className="h2_description">
                Enter training information in the fields to be able to track and enjoy your progress
            </h2>
            <button onClick={handleToogleButtonShow} className="toogle_button btn">
                {isShow ? (
                    <>
                        <FontAwesomeIcon icon={faEyeSlash} /> Hide form
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faEye} /> Show form
                    </>
                )}
            </button>

            {isShow &&
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__field">
                        <label className="form__label">Date</label>
                        <input type="date" className="form__input" value={formData.date} onChange={handleChange}
                               name="date"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label">Exercise</label>
                        <input type="text" className="form__input" value={formData.exercise} onChange={handleChange}
                               name="exercise"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label">series</label>
                        <input type="number" className="form__input" value={formData.series} onChange={handleChange}
                               name="series"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label">weight</label>
                        <input type="number" className="form__input" value={formData.weight} onChange={handleChange}
                               name="weight"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label">the number of repetitions</label>
                        <input type="number" className="form__input" value={formData.repetitions}
                               onChange={handleChange}
                               name="repetitions"/>
                    </div>
                    <p className="err_msg">{errMsg}</p>
                    <div className="form_buttons">
                        <button type="submit" className="btn btn_add">
                            {isEditing ? (
                                <>
                                    <FontAwesomeIcon icon={faEdit}/> Update
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPlus}/> Add
                                </>
                            )}
                        </button>
                        {isEditing && (
                            <button type="button" className="btn btn_cancel" onClick={handleCancelEdit}>
                                <FontAwesomeIcon icon={faTimes} /> Cancel
                            </button>
                        )}
                    </div>
                </form>
            }
            <table>
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Exercise</th>
                    <th>series</th>
                    <th>weight (kg)</th>
                    <th>the number of repetitions</th>
                    <th>buttons</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>13.05.2024</td>
                    <td>Deadlift</td>
                    <td>3</td>
                    <td>180</td>
                    <td>10</td>
                    <td>
                        <button className="btn--delete">
                            <FontAwesomeIcon icon={faTrashAlt} style={{color: "red", width: '50px', height: "40px"}}/>
                        </button>
                        <button className="btn--edite">
                            <FontAwesomeIcon icon={faEdit} style={{color: "brown", width: '50px', height: "40px"}}/>
                        </button>
                    </td>
                </tr>
                {entries.map((entry) => (
                        <tr key={entry.id}>
                            <td>{entry.date}</td>
                            <td>{entry.exercise}</td>
                            <td>{entry.series}</td>
                            <td>{entry.weight}</td>
                            <td>{entry.repetitions}</td>
                            <td>
                                <button onClick={() => handleDelete(entry.id)} className="btn--delete">
                                    <FontAwesomeIcon icon={faTrashAlt}
                                                     style={{color: "red", width: '50px', height: "40px"}}/>
                                </button>
                                <button className="btn--edite" onClick={e => handleEdit(entry)}>
                                    <FontAwesomeIcon icon={faEdit} style={{color: "brown", width: '50px', height: "40px"}}/>
                                </button>
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default PhysicalActivity;
