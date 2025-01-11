import style from "../../css/testimonial.module.css";

const TestimonialCardComponent = ({ students }) => {
  return (
    <div className={style["body-container"]}>
      {students.map((student, index) => (
        <div key={index} className={style["student-card"]}>
          <div className={style["testimonial-box"]}>
            <img src="src/assets/quote-icon.png" alt="Double-Quote Icon" />
            <p>{student.testimonial}</p>
            <img src="src/assets/star-rating.png" alt="Star Rating Icon" />
          </div>
          <div className={style["student-box"]}>
            <img src={student.img_url} alt={student.img_url} />
            <h3>{student.name}</h3>
            <h6>Gym Student</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCardComponent;
