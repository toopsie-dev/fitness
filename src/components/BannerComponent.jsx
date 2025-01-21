import { useContext } from "react";
import AppContext from "../context/AppContext";
import style from "../css/banner.module.css";

const BannerComponent = () => {
  const { handleRedirection } = useContext(AppContext);

  return (
    <div id="banner-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["banner-container"]}>
          <h3>Workout Routines And Plans</h3>
          <h1>Shape Your Future</h1>
          <p>
            You can create routines that target all major muscle groups through
            a mix of strength, flexibility, and cardiovascular workouts.
          </p>
          <button onClick={() => handleRedirection("plan-section")}>
            select a plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
