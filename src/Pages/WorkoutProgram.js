import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import kieani from "../images/kieani.jpeg";
import kieani1 from "../images/kieani2.jpeg";
import kieani2 from "../images/kieani3.jpeg";
import { Link } from "react-router-dom";

const WorkoutProgram = () => {
  return (
    <>
      <section className="workout-first-section">
        <div className="img-banner text-center text-white mb-5">
          <HiOutlineLightBulb className="fs-1 mt-5 mb-3" />
          <div className="fs-1 fw-bolder w-50 m-auto">
            THE ULTIMATE FAT LOSS AND MUSCLE BUILDING PROGRAM
          </div>
          <div className="dash text-center"></div>
          <div className="mt-3 fs-4">Transform physically and mentally</div>
        </div>
      </section>

      <section className="workout-second-section">
        <div className="workout-second-title fs-1 text-uppercase bg-dark text-white w-25 text-center m-auto fw-bolder mb-5">
          WHAT you get
        </div>
        <div className="workout-you-get">
          <div className="box-1">
            <h4 className="text-uppercase m-auto">
              MUSCLE BUILDING AND FAT LOSS WORKOUT PROGRAM
            </h4>
            <img src={kieani} alt="img" />
            <p>
              Exact warm-up and working sets, repetitions, exercises, and rest
              times. A thorough warm-up protocol. Within the programme, there is
              a tracking sheet. Cues for technique and mind-muscle connection
              for each activity.
            </p>
          </div>
          <div className="box-2">
            <h4 className="text-uppercase m-auto">
              my ULTIMATE fatloss cookbook
            </h4>
            <img src={kieani} alt="img" />
            <p>
              Over 40 Indian fat loss recipes that are low calorie, high protein
              and extremely tasty yet easy to make. If you’re looking for a way
              to switch up your diet while still enjoying delicious food, then
              this cookbook is for you
            </p>
          </div>
          <div className="box-3">
            <h4 className="text-uppercase m-auto">
              video tutorials and detailed notes for every exercise
            </h4>
            <img src={kieani} alt="img" />
            <p>
              I've provided demo videos for each workout in case you're unsure
              how to do them. There are also technique hints from me throughout
              the programme so you know exactly how to alter the form for the
              best outcomes while training.
            </p>
          </div>
          <div className="box-4">
            <h4 className="text-uppercase m-auto">
              e-books to help you Transform physically and mentally
            </h4>
            <img src={kieani} alt="img" />
            <p>
              My e-books 'Nutrition Simplified' and 'Goal setting & Behaviour
              Change' comprises of tools that have helped me and 100s of my
              clients get into the best shape of their life.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="progtrans-third-section">
        <div className="program-transformation-title fs-1 mb-5">
          program transformations
        </div>
        <div className="program-carousel">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={kieani}
                  className="d-block w-75"
                  alt="img"
                  style={{ margin: "auto", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={kieani1}
                  className="d-block w-75"
                  alt="img"
                  style={{ margin: "auto", height: "500px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={kieani2}
                  className="d-block w-75"
                  alt="img"
                  style={{ margin: "auto", height: "500px" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <h4 className="fs-2 text-uppercase text-center mt-5">
            click here to purchase
          </h4>
          <div className="mt-3 text-center">
            <Link className="animated-button3 mb-5 workout-program-purchase-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Buy now ₹3500
            </Link>
          </div>
        </div>
      </section>

      <section className="about-workprogram-section">
        <div className="title bg-dark text-white fs-2 fw-bold text-uppercase m-auto w-25 text-center mb-5 mt-5">
          about the bundle
        </div>
        <p className="w-75 text-center m-auto fs-5">
          {" "}
          This TRANSFORMATION PROGRAM comes with two separate 12 week workout
          programs (over 6 months of training), my ULTIMATE FAT LOSS COOKBOOK
          and ebooks on GOAL SETTING, BEHAVIOR CHANGE and NUTRITION. Many
          beginners are duped into believing they must perform elaborate
          workouts, absurdly high volume, and eat bland food in order to lose
          fat and acquire muscle. This is misleading because, while the exercise
          regimens and diets followed by many fitness influencers may be
          suitable for the lifters themselves, they are inappropriate for novice
          to intermediate lifters. The truth is that the majority of fitness
          influencers have been working out for five to ten years or longer,
          frequently have exceptional genetics, and may have used different
          techniques to develop their physiques than they are currently
          exhibiting. As a result, many popular exercises and diet strategies
          are probably not the best for someone with little to no experience and
          without a solid strength and muscular base. The first program is THE
          MODIFIED BODYPART SPLIT PROGRAM where we train 5 days a week : MONDAY:
          LEGS AND ABS TUESDAY: CHEST, SHOULDER AND TRICEPS WEDNESDAY: BACK AND
          BICEPS THURSDAY: REST FRIDAY: LOWER BODY SPLIT SATURDAY: UPPER BODY
          SPLIT SUNDAY: REST The second program is THE FULL BODY SPLIT PROGRAM
          where we train 4 days a week: MONDAY: FULL BODY #1 TUESDAY: REST
          WEDNESDAY: FULL BODY #2 THURSDAY: REST FRIDAY: FULL BODY #3 SATURDAY:
          FULL BODY #4 SUNDAY: REST The ULTIMATE FATLOSS COOKBOOK has over 40
          delicious Indian fat loss recipes.Many of the recipes are designed for
          busy people who don't have time to fuss with complicated recipes. This
          makes it easy to get healthy meals on the table quickly. The cookbook
          includes tips and tricks to help keep you on track and motivated. This
          includes meal ideas for breakfast, lunch, dinner, and snacks, as well
          as suggestions for healthy swaps and lifestyle changes.This includes
          meal ideas for breakfast, lunch, dinner, and snacks, as well as
          suggestions for healthy swaps and lifestyle changes. Plenty of
          vegetarian and non vegetarian options to choose from. E-Books on
          NUTRITION, GOAL SETTING & BEHAVIOUR CHANGE to help you transform
          physically and mentally. Within the nutrition segment, you will find
          over 50 pages covering all you need to know about building a balanced
          diet. I provide step-by-step instructions on understanding the DOs and
          DONTs. Calculating the necessary macros to achieve your desired
          weight. Incorporating nutritious meals into your diet, and mastering a
          diet programming structure/eating schedule to ensure you meet your
          goals. Evidence based tools to help you get into the best shape of
          your life and transform without a coach.
        </p>
      </section>

      <section className="sixth-banner asked-questions">
        <hr className="w-100 m-auto my-5 " />
        <h4 className="bg-dark text-white text-center fs-2 w-50 mb-3 m-auto">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <p className="text-center">
          Please reach us at{" "}
          <Link to="mailto: yashrajoriya321@gmail.com" className="text-dark">
            contactus@sweatwithnc.in{" "}
          </Link>
          if you cannot find an answer to your question.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Does Mohit Sharma have a team?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  No. I believe that anybody who visits my website wants direct
                  communication with me. If you sign up for the online coaching
                  services, you will be in direct contact with me.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Will I have to go to the gym?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Although I do recommend on having access to a gym, it is not
                  absolutely necessary. There might be multiple reasons one
                  doesn't want to go the gym and I can draft home workout
                  programs too. You should be willing to put in the work.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Do I have to take supplements?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Supplements can have benefits if used well but you also don't
                  need to take supplements to get good results. Although I do
                  believe that some supplements can be an easy and convenient
                  way to achieve nutritional demands, we can always make diet
                  tweaks if you do not want to take supplements.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How much weight can I lose in a month? Do you guarantee results?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Lets get this question out of the way. I am no magician. The
                  first few days/weeks will be very introductory to help me
                  draft programs for you. Although I believe that the programs
                  drafted for an individual will provide desired results,
                  however in some circumstances even where an individual follows
                  our program may not achieve the desired results in the
                  stipulated time. I can only guarantee you one thing, I will
                  try my best to simplify health and fitness for you.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What is expected from my end?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  As your coach I expect complete transparency from your end.
                  You are advised to share daily meal pics and workout videos.
                  Failing to do so can and will compromise your coaching
                  experience. Everything else, you can leave it to me. Be ready
                  to put in your 100% and trust what is programmed for you.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is Mohit Sharma a certified fitness trainer?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  No, far from it. I have no formal education background in the
                  field of health and fitness apart from the experience of
                  working on myself and 100s of other individuals. If
                  certification is a must, then I am not the right guide for
                  you.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What will be the mode of communication?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  We will be in direct contact over WhatsApp 24/7. Communication
                  has to be initiated from your end over WhatsApp chat if you
                  are ever facing a problem with your mindset or with the
                  programs drafted for you. You are requested to communicate
                  your queries as bulleted points/ voice notes and you will
                  receive the most detailed response for each of your queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkoutProgram;
