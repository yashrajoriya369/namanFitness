import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Kieani from "../images/kieani.jpeg";

const Blog = (props) => {
  const { title, text } = props;
  return (
    <section id="blog">
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-img">
            <img src={Kieani} alt="blog" />
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
  );
};

export default Blog;
