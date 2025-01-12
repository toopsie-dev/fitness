import { useContext } from "react";
import BlogContext from "../../context/BlogContext";
import style from "../../css/blog.module.css";

const BlogCardButtonComponent = () => {
  const { handleToogleBlogs, toogleBlogs } = useContext(BlogContext);
  return (
    <>
      <button
        className={style["blog-button"]}
        onClick={() => handleToogleBlogs()}
      >
        {toogleBlogs ? "Hide Some Blog" : "View All"}
      </button>
    </>
  );
};

export default BlogCardButtonComponent;
