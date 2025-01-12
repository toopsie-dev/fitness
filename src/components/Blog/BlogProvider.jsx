import { useEffect, useState } from "react";
import BlogContext from "../../context/BlogContext";

const BlogProvider = ({ children }) => {
  const blogList = [
    {
      img_url: "src/assets/blog-one.png",
      title: "lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Sept. 1, 2022",
      number_of_comments: 3,
    },
    {
      img_url: "src/assets/blog-two.png",
      title: "lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Dec. 14, 2022",
      number_of_comments: 3,
    },
    {
      img_url: "src/assets/blog-three.png",
      title: "lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Feb. 22, 2023",
      number_of_comments: 3,
    },
    {
      img_url: "src/assets/blog-two.png",
      title: "lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Oct. 5, 2023",
      number_of_comments: 3,
    },
    {
      img_url: "src/assets/blog-one.png",
      title: "lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Sept. 7, 2024",
      number_of_comments: 3,
    },
  ];

  const [toogleBlogs, setToogleBlogs] = useState(false);

  const [blogs, setBlogs] = useState([blogList]);

  useEffect(() => {
    setBlogs(blogList.slice(0, 3).map((blog) => blog));
  }, []);

  const handleToogleBlogs = () => {
    toogleBlogs
      ? setBlogs(blogList.slice(0, 3).map((blog) => blog))
      : setBlogs(blogList.map((blog) => blog));
    setToogleBlogs(!toogleBlogs);
    console.log(toogleBlogs, blogs);
  };

  return (
    <>
      <BlogContext.Provider value={{ blogs, toogleBlogs, handleToogleBlogs }}>
        {children}
      </BlogContext.Provider>
    </>
  );
};

export default BlogProvider;
