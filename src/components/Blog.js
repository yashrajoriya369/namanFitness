import React from "react";
import Saket from "./saketgokhale.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const Blog = (props) => {
  const { title, text } = props;
  return (
    <>
      <section id="blog">
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={Saket} alt="blog" />
            </div>
            <div className="blog-text">
              <span>18 July / Hypertrophy</span>
              <h5 className="blog-title mt-2">{title}</h5>
              <p>{text}</p>
              <Link to="blogs/:id">Read More</Link>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Saket} alt="blog" />
            </div>
            <div className="blog-text">
              <span>18 July / Hypertrophy</span>
              <h5 className="blog-title mt-2">{title}</h5>
              <p>{text}</p>
              <Link to="blogs/:id">Read More</Link>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src={Saket} alt="blog" />
            </div>
            <div className="blog-text">
              <span>18 July / Hypertrophy</span>
              <h5 className="blog-title mt-2">{title}</h5>
              <p>{text}</p>
              <Link to="blogs/:id">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
