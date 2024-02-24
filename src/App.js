import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Home from "./Pages/Home";
import OnlineCoaching from "./Pages/OnlineCoaching";
import WorkoutProgram from "./Pages/WorkoutProgram";
import Cookbook from "./Pages/Cookbook";
import ExerciseProgram from './Pages/ExerciseProgram'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="online-coaching" element={<OnlineCoaching />} />
            <Route path="workout-program" element={<WorkoutProgram />} />
            <Route path="cookbook" element={<Cookbook />} />
            <Route path="exercise-program" element={<ExerciseProgram />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
