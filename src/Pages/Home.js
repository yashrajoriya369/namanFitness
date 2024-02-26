import React from "react";
import { AiFillMessage } from "react-icons/ai";
import Blog from "../components/Blog";

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
          <button className="enrol_btn mb-5">ENROL NOW</button>
        </div>
      </section>
      <section>
        <div className="second_banner_slogan">
          WHAT IS INCLUDED IN COACHING?
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-sm-6">
              <Blog
                title="DETAILED PERSONALISED NUTRITION"
                text="A straightforward Indian-style diet plan that is adapted to your preferred eating pattern (vegetarian, non-vegetarian, or vegan). You will also have access to my cookbook, which has more than 40 delicious and incredibly simple recipes."
              />
            </div>
            <div className="col-sm-6">
              <Blog title="INDIVIDUAL TRAINING PROGRAMS" text="Each Program is designed to meet individual needs, taking into account fitness goals, activity levels and any physical limitations. Preference is given to exercises that make training fun and sustainable for you. No two clients will have the same program." />
            </div>
            <div className="col-sm-6">
              <Blog title="STEP BY STEP TECHNIQUE ANALYSIS" text="Small technical adjustments are made to individualise your technique. Remember there is no textbook 'perfect' form, we are all built slightly differently, have different goals & different gym equipments." />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
};

export default Home;
