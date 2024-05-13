import React, {useState} from "react";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/physicalActivity.scss"

const PhysicalActivity = () => {
    const [date, setDate] = useState();
    const [exercise, setExercise] = useState();
    const [series, setSeries] = useState()
    const [weight, setWeight] = useState();
    const [repetitions, setRepetitions] = useState();

    const handleDateInput = (e) => {
        const NewDate = e.target.value;
        setDate(NewDate);
    }

   return (
       <div className="PhysicalActivityBody">
           <form className="form">
               <div className="form__field">
                   <label className="form__label">Date</label>
                   <input type="date" className="form__input" value={date}/>
               </div>

               <div className="form__field">
                   <label className="form__label">Exercise</label>
                   <input type="text" className="form__input"/>
               </div>

               <div className="form__field">
                   <label className="form__label">series</label>
                   <input type="number" className="form__input"/>
               </div>

               <div className="form__field">
                   <label className="form__label">weight</label>
                   <input type="number" className="form__input"/>
               </div>

               <div className="form__field">
                   <label className="form__label">the number of repetitions</label>
                   <input type="number" className="form__input"/>
               </div>
               <button type="submit" className="btn--primary">ADD</button>
           </form>

           <table>
               <thead>
               <tr>
                   <th>Data</th>
                   <th>Exercise</th>
                   <th>series</th>
                   <th>weight</th>
                   <th>the number of repetitions</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                   <td>15.05.2024</td>
                   <td>Martwy ciąg</td>
                   <td>3</td>
                   <td>180</td>
                   <td>8</td>
               </tr>
               <tr>
                   <td>15.05.2024</td>
                   <td>Martwy ciąg</td>
                   <td>3</td>
                   <td>180</td>
                   <td>8</td>
               </tr>

               </tbody>
           </table>
       </div>
   );
}
export default PhysicalActivity;
