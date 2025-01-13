import style from "../../css/testimonial.module.css";
import TestimonialCardComponent from "./TestimonialCardComponent";

const TestimonialComponent = () => {
  const students = [
    {
      name: "noomi smith",
      position: "Gym Student",
      testimonial:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      img_url: "./images/testimonial-one.png",
    },
    {
      name: "ann criz",
      position: "Gym Student",
      testimonial:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      img_url: "./images/testimonial-two.png",
    },
    {
      name: "mort sins",
      position: "Gym Student",
      testimonial:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      img_url: "./images/testimonial-three.png",
    },
  ];

  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["testimonial-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
            <h2 className={style["title"]}>Student says</h2>
          </div>
          <TestimonialCardComponent students={students} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
