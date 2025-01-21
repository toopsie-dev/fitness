import { useEffect, useState } from "react";
import BlogContext from "../../context/BlogContext";

const BlogProvider = ({ children }) => {
  const blogList = [
    {
      img_url: "./images/blog-one.png",
      title: "How to Build a Sustainable Workout Routine",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Sept. 1, 2022",
      number_of_comments: 3,
    },
    {
      img_url: "./images/blog-two.png",
      title: "5 Simple Steps to Crush Your Fitness Goals",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Dec. 14, 2022",
      number_of_comments: 3,
    },
    {
      img_url: "./images/blog-three.png",
      title: "The Ultimate Beginner's Guide to Gym Workouts",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Feb. 22, 2023",
      number_of_comments: 3,
    },
    {
      img_url: "./images/blog-two.png",
      title: "10 Tips to Stay Motivated on Your Fitness Journey",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      date_upload: "Oct. 5, 2023",
      number_of_comments: 3,
    },
    {
      img_url: "./images/blog-one.png",
      title: "Strength Training vs. Cardio: Which One is Right for You?",
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
