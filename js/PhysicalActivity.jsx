import React, {useEffect, useState} from "react";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/physicalActivity.scss"
import { v4 as uuidv4 } from 'uuid'; // Import funkcji generującej UUID
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
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


    // pobrane dane z localStorage podczas montowania komponentu
    useEffect(() => {
        const storedEntries = localStorage.getItem('entries');
        if (storedEntries) {
            setEntries(JSON.parse(storedEntries));
        }
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.date || !formData.exercise || !formData.series || !formData.weight || !formData.repetitions) {
            setErrMsg('All fields are required.');
        } else if (formData.series <= 0 || formData.weight <= 0 || formData.repetitions <= 0) {
            setErrMsg('Series, weight, and repetitions must be greater than 0.');
        } else {
            setErrMsg("");
            setErrMsgOFF(false);

            const newEntry = {...formData, id: uuidv4()};

            setEntries(prevState => [...prevState, newEntry])

            localStorage.setItem('entries', JSON.stringify([...entries, newEntry]));

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
            <button onClick={handleToogleButtonShow} className="toogle_button btn">{isShow ? "hide form" : "show form"}</button>

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
                    <button type="submit" className="btn btn_add">ADD</button>
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
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>13.05.2024</td>
                    <td>Deadlift</td>
                    <td>3</td>
                    <td>180</td>
                    <td>10</td>
                    <button className="btn--delete">
                        <FontAwesomeIcon icon={faTrashAlt} style={{color: "red", width: '50px', height: "40px"}}/>
                    </button>
                    <button className="btn--edite">
                        <FontAwesomeIcon icon={faEdit} style={{color: "brown", width: '50px', height: "40px"}}/>
                    </button>
                </tr>
                {entries.map((entry, index) => (
                    <tr key={entry.id}>
                        <td>{entry.date}</td>
                        <td>{entry.exercise}</td>
                        <td>{entry.series}</td>
                        <td>{entry.weight}</td>
                        <td>{entry.repetitions}</td>
                        <button onClick={() => handleDelete(entry.id)} className="btn--delete">
                            <FontAwesomeIcon icon={faTrashAlt} style={{color: "red", width: '50px', height: "40px"}}/>
                        </button>
                        <button className="btn--edite" >
                            <FontAwesomeIcon icon={faEdit} style={{color: "brown", width: '50px', height: "40px"}}/>
                        </button>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}
export default PhysicalActivity;
