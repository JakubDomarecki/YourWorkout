import React from "react";
import {createRoot} from "react-dom/client";
import "../SCSS/main.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import PhysicalActivity from "./PhysicalActivity";
import TrainingPlan from "./TrainingPlan";
import Home from "./Home";
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="PyhiscalActivity" element={<PhysicalActivity/>}/>
                    <Route path="TrainingPlan" element={<TrainingPlan/>}/>
                    <Route path="*" element={<h2>Not Found</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>)