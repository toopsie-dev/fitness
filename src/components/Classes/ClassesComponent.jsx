import style from "../../css/classes.module.css";
import ClassesCardComponent from "./ClassesCardComponent";

const ClassesComponent = () => {
  const classes = [
    {
      title: "CrossFit",
      icon_url: "./images/class-one.png",
      description:
        "A strength and conditioning program combining weightlifting, functional movements, and high-intensity cardio.",
    },
    {
      title: "Yoga",
      icon_url: "./images/class-two.png",
      description:
        "Focuses on flexibility, balance, and mindfulness with different styles like Vinyasa (flow), Hatha (gentle), or Power Yoga (more intense).",
    },
    {
      title: "Spin/Cycling",
      icon_url: "./images/class-three.png",
      description:
        "High-energy, indoor cycling classes set to music, great for cardio and lower-body strength.",
    },
    {
      title: "Functional Training",
      icon_url: "./images/class-four.png",
      description:
        "Uses movements that mimic daily activities (like squats, lunges, and pulls) to improve overall fitness and coordination.",
    },
    {
      title: "Pilates",
      icon_url: "./images/class-five.png",
      description:
        "A low-impact class that emphasizes core strength, flexibility, and posture through controlled movements.",
    },
    {
      title: "Kickboxing",
      icon_url: "./images/class-six.png",
      description:
        "A dynamic class combining martial arts techniques and cardio to build strength, agility, and endurance.",
    },
  ];

  return (
    <div id="classes-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["classes-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>Fitness Hacks</h3>
            <h2 className={style["title"]}>our classes</h2>
          </div>
          <ClassesCardComponent classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default ClassesComponent;
