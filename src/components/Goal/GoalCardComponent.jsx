import style from "../../css/goal.module.css";

const GoalCardComponent = ({ gymGoals }) => {
  return (
    <>
      {gymGoals.map((goal, index) => (
        <div className={style["goal-card"]} key={index}>
          <div className={style["goal-card-icon"]}>
            <img src={goal.icon_url} alt={goal.title} />
          </div>
          <div className={style["goal-card-title"]}>
            <h5>{goal.title}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default GoalCardComponent;
