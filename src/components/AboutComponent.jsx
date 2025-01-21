/* eslint-disable react/no-unescaped-entities */
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
            <h3 className={style["sub-title"]}>Your Partners</h3>
            <h2 className={style["title"]}>about fitness</h2>
            <p>
              Achieve your fitness goals in a space designed to inspire and
              empower. Our gym offers state-of-the-art equipment, expert
              coaching, and dynamic classes to suit every fitness level. Whether
              you're building strength, boosting endurance, or finding your
              inner balance, we're here to support your journey every step of
              the way.
            </p>
            <button>discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
