import "../SCSS/main.scss"
import "../SCSS/componentsScss/home.scss"
const Home = () => {
   return (
     <main>
         <div className='home_description'>
             <h2>YourWorkout</h2>
             <p>YourWorkout to strona, która integruje funkcje monitorowania aktywności fizycznej i żywienia, pozwala na
                 wybór
                 spersonalizowanych planów treningowych. Jest to swoisty "przyjaciel fitnesowy", który pomaga
                 użytkownikom śledzić
                 ich postępy, motywuje do osiągania celów i wspiera w procesie zdrowego stylu życia.
             </p>
         </div>
         <div className="home_photo">
            <img src="../images/home_photo.png" className="home_img"/>
         </div>

     </main>
   );
}
export default Home;