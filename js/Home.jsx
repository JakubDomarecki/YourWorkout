import "../SCSS/main.scss"
import "../SCSS/componentsScss/home.scss"
const Home = () => {
   return (
     <main>
         <div className='home_description'>
             <h2>YourWorkout</h2>
             <p>YourWorkout is a website that integrates the functions of monitoring physical activity, allowing you to
                 choice
                 personalized training plans. It is a kind of "fitness friend" that helps
                 users to follow
                 their progress, motivates them to achieve their goals and supports them in the process of a healthy <lifestyle className=""></lifestyle>
             </p>
         </div>
         <div className="home_photo">
            <img src="../images/home_photo.png" className="home_img"/>
         </div>

     </main>
   );
}
export default Home;