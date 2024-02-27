import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import "../App.css";
import "../index.css";
import Marquee from "react-fast-marquee";
import First from "../images/1.webp";
import Second from "../images/2.webp";
import Third from "../images/3.webp";
import Fourth from "../images/4.jpg";
import Five from "../images/5.jpg";
import Six from "../images/6.webp";
import Seven from "../images/7.webp";

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

      <section className="">
        <div className="second_banner_slogan fs-3 w-50 m-auto">
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
        <div
          className="text-center fs-1 text-uppercase fw-bold bg-dark text-white my-5"
          style={{ width: "40%", margin: "auto" }}
        >
          Client Transformation
        </div>
        <div></div>
      </section>

      <section className="client-transformation">
        <div className="container d-flex justify-content-between m-auto">
          <div className="card">
            <div className="card-header">
              <img
                src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=d59d0cf6af1d779a3dca451e0ba259c33bbc6115&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2019%2F08%2F30142658%2F2020-jeep-wrangler-16.jpg&thumbnail=750%2C422&quality=80"
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="tag tag-teal">Technology</span>
              <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur tenetur distinctio neque?
              </p>
              <div className="user">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSft5PLhaSb6QUdT0yRu3rjlam1Rt--WDJ6yQ&usqp=CAU"
                  alt=""
                />
                <div className="user-info">
                  <h5>Lewis Daniels</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img
                src="https://images.cruisecritic.com/image/18740535/10-best-cruise-destinations-for-hot-air-balloon-rides_600x400_21.jpg"
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">Place</span>
              <h4>
                Hot Air Ballooning in Nepal - 1 Day - Nepal Mother House Treks
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                dolor nihil saepe. Nobis nihil minus similique hic quas
                mollitia. Error.
              </p>
              <div className="user">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSft5PLhaSb6QUdT0yRu3rjlam1Rt--WDJ6yQ&usqp=CAU"
                  alt=""
                />
                <div className="user-info">
                  <h5>Lewis Daniels</h5>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img
                src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200305114843-01-edge-hudson-yards-observation-deck.jpg"
                alt=""
              />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Travel</span>
              <h4>
                New York City | Layout, People, Economy, Culture, & History
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias consequuntur sequi suscipit iure fuga ea!
              </p>
              <div className="user">
                <img
                  src="https://3.bp.blogspot.com/--sCpJJGYWEA/W2P4C51CYSI/AAAAAAAAQcI/LR4U_--Wf1E3wz7RLZtmwBPObm_ky9tQQCLcBGAs/s1600/beautiful-indian-women-photos-1.jpg"
                  alt=""
                />
                <div className="user-info">
                  <h5>Carrie Brewer</h5>
                  <small>23 Dec 2020</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-slogan text-uppercase text-center fs-1 bg-dark text-white">
          testimonials
        </div>
        <div className="testimonials-marquee">
          <Marquee>
            <img src={First} alt="protein" width="100px" />
            <img src={Second} alt="protein" width="100px" />
            <img src={Third} alt="protein" width="100px" />
            <img src={Fourth} alt="protein" width="100px" />
            <img src={Five} alt="protein" width="100px" />
            <img src={Six} alt="protein" width="100px" />
            <img src={Seven} alt="protein" width="100px" />
            <img src={First} alt="protein" width="100px" />
            <img src={Second} alt="protein" width="100px" />
            <img src={Third} alt="protein" width="100px" />
            <img src={Fourth} alt="protein" width="100px" />
            <img src={Five} alt="protein" width="100px" />
            <img src={Six} alt="protein" width="100px" />
            <img src={Seven} alt="protein" width="100px" />
            <img src={Six} alt="protein" width="100px" />
            <img src={Fourth} alt="protein" width="100px" />
          </Marquee>
          <div className="mt-3 text-center">
            <Link className="animated-button3 mt-5 mb-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ENROL NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="sixth-banner">
        <div className="text-white bg-dark text-center w-50 m-auto fs-1">
          How does coaching work?
        </div>
        <p>
          My online fitness coaching services revolve around three key elements:
          <b>assessment, design, and implementation.</b> <br /> First off, I
          will work with you to <b>assess</b> your current fitness level,
          relationship with food, social/mental constraints. We will discuss
          your goals, preferences, and other pertinent information that will
          help me understand your needs. I will then <b>design</b> a program
          that meets your individual goals and lifestyle, taking into
          consideration any injuries/ physical limitations or dietary
          restrictions you may have. <br />
          Once this plan is in place, we can move onto the{" "}
          <b>implementation </b>
          stage. I will track your progress on a day to day basis and adjust the
          program as needed to ensure you are staying on track to reach your
          goals. During this process, I will be available to discuss any
          questions or concerns you may have. I will also be there by your side
          if at all you are facing issues with your mindset. My coaching systems
          are highly robust. It is efficient, organized, and highly
          individualized.
          <br /> We will set measurable goals each month that can be revised as
          your progress within the program improves. We will also make sure to
          check in regularly so we can assess how well the program is working
          for you and make any necessary changes.
          <br /> Lastly, I will be your biggest cheerleader throughout the
          entire process! I am here to motivate you, answer any questions, and
          keep you accountable. Ultimately, my goal is to help you achieve
          success and reach your dreams.
          <br /> <b>Note:</b> Please keep in mind that you must be committed to
          changing and acting. Anything less will be a waste of both our time
          and your money. We will provide you with the most individualized
          guidance ever if you pledge to act immediately now. Communication and
          transparency are going to be crucial.
        </p>
        <div className="enrol-plans container mt-5 mb-5">
          <div className="row">
            <div className="col-sm-6 text-center">
              <h4>3 Months Online Coaching</h4>
              <div
                className="bg-dark text-white text-center"
                style={{
                  width: "500px",
                  height: "500px",
                  fontSize: "2rem",
                  paddingTop: "30%",
                  marginLeft: "120px",
                }}
              >
                3 MONTHS <br /> ₹17,000
              </div>
              <h4 className="mt-3">MOST POPULAR</h4>
              <p className="w-50 m-auto">
                Great place to get started if you want to experiment with online
                coaching and get trained directly under Mohit Sharma
              </p>
            </div>
            <div className="col-sm-6 text-center">
              <h4>6 Months Online Coaching</h4>
              <div
                className="bg-dark text-white"
                style={{
                  width: "500px",
                  height: "500px",
                  fontSize: "2rem",
                  paddingTop: "30%",
                  marginLeft: "120px",
                }}
              >
                6 MONTHS <br /> ₹30,000
              </div>
              <h4 className="mt-3">BEST PRICE</h4>
              <p className="w-50 m-auto">
                The best choice if you're looking for complete body
                transformation and guidance in every step of your fitness
                journey.
              </p>
            </div>
          </div>
        </div>

        <section className="enrol-plans-choice">
          <h3 className="text-center fs-1 fw-bolder m-5">WHICH ONE ?</h3>
          <div className="mt-3 text-center">
            <Link className="animated-button3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>3 MONTHS
            </Link>
          </div>
          <div className="mt-3 text-center">
            <Link className="animated-button3 mb-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>6 MONTHS
            </Link>
          </div>
          <hr className="w-75 m-auto mb-5" />
          <h4 className="bg-dark text-white m-auto text-center w-25">
            FREQUENTLY ASKED QUESTIONS
          </h4>
          <p>
            Please reach us at{" "}
            <Link to="mailto: yashrajoriya321@gmail.com" className="text-dark">
              contactus@sweatwithnc.in{" "}
            </Link>
            if you cannot find an answer to your question.
          </p>
        </section>
      </section>

      <section className="asked-questions">
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

export default Home;
