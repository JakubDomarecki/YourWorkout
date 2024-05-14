import "../SCSS/main.scss"
import "../SCSS/componentsScss/TrainingPlan.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TrainingPlan = () => {




    return (
        <>
            <div className="TrainingPlan_header">
                    <h2>Your training plan</h2>
            </div>
            <div className="TrainingPlan_main">
                <div className="TrainingPlan_days">
                 <div>
                    <h4 className="TrainingPlan_day_header">Monday</h4>
                    <div>
                        <input type="text" className="TrainingPlan_day_input" placeholder="type the name of the exercise"/>
                        <button className="TrainingPlan_day_button">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                    <ul className="TrainingPlan_list">
                        <li className="TrainingPlan_item">siema</li>
                    </ul>
                </div>
                    <div>
                        <h4 className="TrainingPlan_day_header">Tuesday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="TrainingPlan_day_header">Wednesday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="TrainingPlan_day_header">Thursday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                </div>
                <div className="TrainingPlan_days">
                    <div>
                        <h4 className="TrainingPlan_day_header">Friday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="TrainingPlan_day_header">Saturday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="TrainingPlan_day_header">Sunday</h4>
                        <div>
                            <input type="text" className="TrainingPlan_day_input"
                                   placeholder="type the name of the exercise"/>
                            <button className="TrainingPlan_day_button">
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>
                        <ul className="TrainingPlan_list">
                            <li className="TrainingPlan_item">siema</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};
export default TrainingPlan;