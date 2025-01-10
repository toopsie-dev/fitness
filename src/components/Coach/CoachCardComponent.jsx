import style from "../../css/coach.module.css";

const CoachCardComponent = ({ coaches }) => {
  return (
    <div className={style["body-container"]}>
      {coaches.map((coach, index) => (
        <div key={index} className={style["class-card"]}>
          <img src={coach.icon_url} alt={coach.name} />
          <h3>{coach.name}</h3>
          <p>{coach.job_description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoachCardComponent;
