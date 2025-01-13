import style from "../../css/coach.module.css";
import CoachCardComponent from "./CoachCardComponent";

const CoachComponent = () => {
  const coaches = [
    {
      name: "noomi smith",
      icon_url: "./src/assets/coach-one.png",
      job_description: "Crossfit Coach",
    },
    {
      name: "michal mayers",
      icon_url: "./src/assets/coach-two.png",
      job_description: "Fitness Coach",
    },
    {
      name: "Robert hawkins",
      icon_url: "./src/assets/coach-three.png",
      job_description: "Body Building",
    },
    {
      name: "annie adams",
      icon_url: "./src/assets/coach-four.png",
      job_description: "Crossfit Coach",
    },
  ];

  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["coach-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
            <h2 className={style["title"]}>expert coaches</h2>
          </div>
          <CoachCardComponent coaches={coaches} />
        </div>
      </div>
    </div>
  );
};

export default CoachComponent;
