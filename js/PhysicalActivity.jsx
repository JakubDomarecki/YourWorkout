import React, {useState} from "react";
import "../SCSS/main.scss"
import "../SCSS/componentsScss/physicalActivity.scss"

const PhysicalActivity = () => {
   const [currentDate, setCurrentDate] = useState(new Date());

   return (
       <div className="PhysicalActivityBody">
           <form className="form">
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

           <table border="1">
               <thead>
               <tr>
                   <th>Exercise</th>
                   <th>series</th>
                   <th>weight</th>
                   <th>the number of repetitions</th>
               </tr>
               </thead>
           </table>
       </div>
   );
}
export default PhysicalActivity;
