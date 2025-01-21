/* eslint-disable react/no-unescaped-entities */
import style from "../../css/testimonial.module.css";
import TestimonialCardComponent from "./TestimonialCardComponent";

const TestimonialComponent = () => {
  const students = [
    {
      name: "noomi smith",
      position: "Gym Student",
      testimonial:
        "Joining this gym was the best decision I’ve ever made! The coaches are incredibly supportive and knowledgeable, and the classes are both fun and challenging. In just three months, I’ve lost 15 pounds, gained confidence, and feel stronger than ever. The community here is amazing—it truly feels like a second home!",
      img_url: "./images/testimonial-one.png",
    },
    {
      name: "ann criz",
      position: "Gym Student",
      testimonial:
        "I never thought I’d enjoy working out, but this gym completely changed my mindset. The variety of classes keeps things exciting, and the trainers push you to reach your full potential while always encouraging you. I’ve built muscle, improved my energy, and made lifelong friends here!",
      img_url: "./images/testimonial-two.png",
    },
    {
      name: "mort sins",
      position: "Gym Student",
      testimonial:
        "This gym has transformed my life! The personalized guidance from the trainers and the supportive atmosphere made all the difference. I've gained strength, improved my endurance, and feel healthier than ever. It's more than just a gym—it's a community that keeps me motivated every day.",
      img_url: "./images/testimonial-three.png",
    },
  ];

  return (
    <div id="testimonial-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["testimonial-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>Hear from Our Fitness Family</h3>
            <h2 className={style["title"]}>Student says</h2>
          </div>
          <TestimonialCardComponent students={students} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
