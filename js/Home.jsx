import "../SCSS/main.scss"
import "../SCSS/componentsScss/home.scss"
import  photoHome from "../images/home_photo.png"
const Home = () => {


   return (
     <main>
         <div className='home_description'>
             <h2 className="home_description_header">YourWorkout</h2>
             <p>YourWorkout is a website that integrates the functions of monitoring physical activity, allowing you to
                 choice
                 personalized training plans. It is a kind of "fitness friend" that helps
                 users to follow
                 their progress, motivates them to achieve their goals
             </p>
         </div>
         <div className="home_photo">
            <img alt="home_photo" src={photoHome} className="home_img"/>
         </div>

     </main>
   );
}
export default Home;