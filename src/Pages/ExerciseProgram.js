import React from "react";
import { AiFillMessage } from "react-icons/ai";

const ExcerciseProgram = () => {
  return (
    <>
      <section className="first-section">
        <div className="img-banner text-center text-white mb-5">
          <AiFillMessage className="fs-1 mt-5" />
          <div className="mt-4 fs-2 fw-bold">1-ON-1</div>
          <div className="fs-2 fw-bolder">ONLINE FITNESS COACHING</div>
          <div className="dash text-center"></div>
          <div className="mt-3 fs-5">SWEATWITHNC.IN</div>
        </div>
      </section>
      <section className="exercise-program-second">
        <div className="text-white bg-dark text-uppercase fs-2 text-center m-auto w-25 mb-5">back to the basics</div>
        <p className="w-75 m-auto fs-5 mb-5">Many beginners are duped into believing they must perform elaborate workouts, absurdly high volume in order to lose fat and acquire muscle. This is misleading because, while the exercise regimens followed by many fitness influencers may be suitable for the lifters themselves, they are inappropriate for novice to intermediate lifters. The truth is that the majority of fitness influencers have been working out for five to ten years or longer, frequently have exceptional genetics, and may have used different techniques to develop their physiques than they are currently exhibiting. As a result, many popular exercises are probably not the best for someone with little to no experience and without a solid strength and muscular base.</p>
      </section>
      <section className=""></section>
    </>
  );
};

export default ExcerciseProgram;
