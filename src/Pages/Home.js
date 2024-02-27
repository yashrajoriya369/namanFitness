import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import "../App.css";

const Home = () => {
  return (
    <>
      <section className="main_banner">
        <div className="img_banner text-center text-white mb-5">
          <AiFillMessage className="fs-1 mt-5" />
          <div className="mt-4 fs-2 fw-bold">1-ON-1</div>
          <div className="fs-2 fw-bolder">ONLINE FITNESS COACHING</div>
          <div className="dash text-center"></div>
          <div className="mt-3 fs-5">SWEATWITHNC.IN</div>
        </div>
        <div className="fs-1 text-center fw-bold main_banner_slogan">
          GET INTO THE BEST SHAPE OF YOUR LIFE
        </div>
        <div className="mt-3 text-center">
          <Link className="animated-button3 mb-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ENROL NOW
          </Link>
        </div>
      </section>
      <section>
        <div className="second_banner_slogan">
          WHAT IS INCLUDED IN COACHING?
        </div>
        <div>
          <Blog
            title="DETAILED PERSONALISED NUTRITION"
            text="A straightforward Indian-style diet plan that is adapted to your preferred eating pattern (vegetarian, non-vegetarian, or vegan). You will also have access to my cookbook, which has more than 40 delicious and incredibly simple recipes."
          />
        </div>
        <div className="mt-3 text-center">
          <Link className="animated-button3 mb-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ENROL NOW
          </Link>
        </div>
      </section>
      <section className="third-banner">
        <div className="text-center fs-1 text-uppercase fw-bold bg-dark text-white my-5" style={{width: "60%", margin: "auto"}}>Client Transformation</div>
        <div></div>
      </section>
      <section></section>
    </>
  );
};

export default Home;
