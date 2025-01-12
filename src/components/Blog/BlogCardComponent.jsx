import { useContext } from "react";
import BlogContext from "../../context/BlogContext";
import style from "../../css/blog.module.css";
import BlogCardButtonComponent from "./BlogCardButtonComponent";

const BlogCardComponent = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <>
      <div className={style["body-container"]}>
        {blogs.map((blog, index) => (
          <div key={index} className={style["blog-card"]}>
            <img src={blog.img_url} alt={blog.img_url} />
            <div className={style["blog-details"]}>
              <span>{blog.date_upload}</span>
              <span>
                <span>{blog.number_of_comments}</span> Comments
              </span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
      <BlogCardButtonComponent />
    </>
  );
};

export default BlogCardComponent;
