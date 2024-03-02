import React from "react";
import { Link } from "react-router-dom";
import Kieani from "../images/kieani.jpeg";


const BlogCard = (props) => {
  const { title, description } = props;
  return (
    <>
      <section id="blog">
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img src={Kieani} alt="blog" />
            </div>
            <div className="blog-text">
              <span>18 July / Hypertrophy</span>
              <h5 className="blog-title mt-2">{title}</h5>
              <p>{description}</p>
              <Link to="blogs/:id">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
