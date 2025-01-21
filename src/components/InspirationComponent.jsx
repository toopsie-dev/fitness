import { useContext } from "react";
import AppContext from "../context/AppContext";
import style from "../css/inspiration.module.css";

const InspirationComponent = () => {
  const { handleRedirection } = useContext(AppContext);

  return (
    <div id="inspirational-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["inspiration-container"]}>
          <div className={style["title-container"]}>
            <h3 className={style["sub-title"]}>Fitness Gym</h3>
            <h2 className={style["title"]}>What are you waiting for?</h2>
          </div>
          <div className={style["body-container"]}>
            <p>
              Your fitness journey starts today! Take the first step toward a
              healthier, stronger, and more confident you. Whether it’s joining
              our gym, signing up for a class, or meeting with our expert
              trainers, the time to invest in yourself is now. Let’s make your
              goals a reality!
            </p>
            <button onClick={() => handleRedirection("plan-section")}>
              select a plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationComponent;
