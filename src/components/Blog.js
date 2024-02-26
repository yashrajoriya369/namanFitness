import React from "react";
import Saket from "./saketgokhale.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div
        className="blog_img card d-flex flex-row w-100 my-3"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
      >
        <img
          src={Saket}
          className="card-img-top w-25 rounded img-fluid m-5"
          alt="saketgokhale"
        />
        <div className="card-body w-25">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="blogs" className="blog_btn btn w-100">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
