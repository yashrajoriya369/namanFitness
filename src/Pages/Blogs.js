import React, { useEffect } from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogState = useSelector((state) => state.blog.blog);
  console.log(blogState);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  return (
    <>
      {blogState &&
        blogState?.map((item, index) => {
          return (
            <div key={index} className="col-3">
              <BlogCard title={item?.title} description={item?.description} />
            </div>
          );
        })}
    </>
  );
};

export default Blog;
