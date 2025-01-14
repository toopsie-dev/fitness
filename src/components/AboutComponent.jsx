import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import style from "../css/about.module.css";

const AboutComponent = () => {
  const [videoWidth, setVideoWidth] = useState("600px");
  const [videoHeight, setVideoHeight] = useState("350px");

  useEffect(() => {
    if (window.innerWidth < 426) {
      setVideoHeight("100%");
      setVideoWidth("100%");
    }
  }, []);

  return (
    <div id="about-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["about-container"]}>
          <div className={style["video-container"]}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=tMUxHx5fatA"
              width={videoWidth}
              height={videoHeight}
            />
          </div>
          <div className={style["description-container"]}>
            <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
            <h2 className={style["title"]}>about fitness</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </p>
            <button>discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
