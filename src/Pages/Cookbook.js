import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import cookbook from "../images/cookbook.jpg";
import beforeTrans from "../images/kieani2.jpeg";
import afterTrans from "../images/kieani3.jpeg";

const Cookbook = () => {
  return (
    <>
      <section className="cookbook-first-section">
        <div className="img-banner text-center text-white mb-5">
          <HiOutlineLightBulb style={{ fontSize: "4rem", marginTop: "35px" }} />
          <div className="mt-5 fs-2 fw-bolder text-uppercase">
            the ultimate fatloss cook book
          </div>
          <div className="dash text-center mt-5"></div>
          <div className="mt-3 fs-4 text-uppercase">
            THE RECIPES IN THIS COOKBOOK ARE DANGEROUSLY DELICIOUS
          </div>
        </div>
      </section>

      <section className="cookbook-second-section">
        <div className="cookbook-second-title fs-2 bg-dark text-white w-25 fw-bolder text-center text-uppercase m-auto mb-5">
          description
        </div>
        <div className="cookbook-description">
          <div className="cookbook-text">
            <p>
              My collection of high-protein, fat loss recipes will help you
              reach your weight loss goals quickly and efficiently.
              <br /> This cookbook contains over 40 tasty yet simple high
              protein fat loss recipes. Many of the recipes are designed for
              busy people who don't have time to fuss with complicated recipes.
              This makes it easy to get healthy meals on the table quickly.
              <br /> Each recipe lists the nutritional information, so you can
              easily track your macronutrients and calories. The recipes are
              designed to provide a balance of carbohydrates, fats, and proteins
              for optimal fat loss.
              <br /> This cookbook offers a variety of meals to suit even the
              pickiest eaters. Whether you’re a vegetarian or a meat-lover,
              you’ll find meals that will fit your tastes and dietary needs. The
              cookbook includes tips and tricks to help keep you on track and
              motivated. This includes meal ideas for breakfast, lunch, dinner,
              and snacks, as well as suggestions for healthy swaps and lifestyle
              changes.
              <br /> The best part about this cookbook is that it offers
              delicious food that doesn’t sacrifice flavor. So if you’re looking
              for a way to switch up your diet while still enjoying delicious
              food, then this cookbook is for you.
            </p>
          </div>
          <div className="cookbook-book">
            <img src={cookbook} alt="cookbook" />
          </div>
        </div>
      </section>

      <section className="cookbook-third-section">
        <div className="cookbook-slogan text-uppercase fs-2 fw-bolder w-25 bg-dark text-white text-center m-auto mb-5">
          results
        </div>
        <div className="cookbook-transformation-results">
          <div className="before-transformation">
            <img src={beforeTrans} alt="beforeTransformation" />
          </div>
          <div className="after-transformation">
            <img src={afterTrans} alt="afterTransformation" />
          </div>
        </div>
        <p>it is all in the diet</p>
      </section>

      <section className="cookbook-purchase-section">
        <div className="cookbook-purchase-title bg-dark text-white text-uppercase fs-2 w-50 text-center m-auto mb-5">
          click here to purchase
        </div>
        <div className="cookbook-purchase-btn">
          <div className="mt-3 text-center">
            <Link className="animated-button3 fs-5 mb-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              BUY NOW ₹2000
            </Link>
          </div>
          <div className="text-center">
            <Link className="animated-button3 mb-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              COOKBOOK + WORKOUT PROGRAM + TRANSFORMATION EBOOKS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookbook;
