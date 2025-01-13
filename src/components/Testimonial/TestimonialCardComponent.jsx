import Slider from "react-slick";
import style from "../../css/testimonial.module.css";

const TestimonialCardComponent = ({ students }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={style["body-container"]}>
      <Slider {...settings}>
        {students.map((student, index) => (
          <div key={index} className={style["student-card"]}>
            <div className={style["testimonial-box"]}>
              <img src="./images/quote-icon.png" alt="Double-Quote Icon" />
              <p>{student.testimonial}</p>
              <img src="./images/star-rating.png" alt="Star Rating Icon" />
            </div>
            <div className={style["student-box"]}>
              <img src={student.img_url} alt={student.img_url} />
              <h3>{student.name}</h3>
              <h6>Gym Student</h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCardComponent;
