import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Home from "./Pages/Home";
import OnlineCoaching from "./Pages/OnlineCoaching";
import WorkoutProgram from "./Pages/WorkoutProgram";
import Cookbook from "./Pages/Cookbook";
import ExerciseProgram from "./Pages/ExerciseProgram";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Blogs from "./Pages/Blogs";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import SingleBlog from "./Pages/SingleBlog";

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
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
