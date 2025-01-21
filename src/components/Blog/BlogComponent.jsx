import style from "../../css/blog.module.css";
import BlogCardComponent from "./BlogCardComponent";
import BlogProvider from "./BlogProvider";

const BlogComponent = () => {
  return (
    <BlogProvider>
      <div id="blog-section" className={style["container"]}>
        <div className={style["content-width"]}>
          <div className={style["blog-container"]}>
            <div className={style["title-container"]}>
              <h3 className={style["sub-title"]}>Inspiration and Tips</h3>
              <h2 className={style["title"]}>Fitness Blog</h2>
            </div>
            <BlogCardComponent />
          </div>
        </div>
      </div>
    </BlogProvider>
  );
};

export default BlogComponent;
