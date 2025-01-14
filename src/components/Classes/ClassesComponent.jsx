import style from "../../css/classes.module.css";
import ClassesCardComponent from "./ClassesCardComponent";

const ClassesComponent = () => {
  const classes = [
    {
      title: "Classes One",
      icon_url: "./images/class-one.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Classes Two",
      icon_url: "./images/class-two.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Classes Three",
      icon_url: "./images/class-three.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Classes Four",
      icon_url: "./images/class-four.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Classes Five",
      icon_url: "./images/class-five.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      title: "Classes Six",
      icon_url: "./images/class-six.png",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];

  return (
    <div id="classes-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["classes-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
            <h2 className={style["title"]}>our classes</h2>
          </div>
          <ClassesCardComponent classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default ClassesComponent;
