import style from "../../css/goal.module.css";
import GoalCardComponent from "./GoalCardComponent";

const GoalComponent = () => {
  const gymGoals = [
    {
      icon_url: "/fitness/src/assets/achievement.png",
      title: "Gain weight/muscle",
    },
    {
      icon_url: "/fitness/src/assets/retain.png",
      title: "Improve your mobility",
    },
    {
      icon_url: "/fitness/src/assets/time.png",
      title: "Get healthy in body and mind",
    },
  ];

  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["goal-container"]}>
          <GoalCardComponent gymGoals={gymGoals} />
        </div>
      </div>
    </div>
  );
};

export default GoalComponent;
