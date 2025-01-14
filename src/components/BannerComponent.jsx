import { useContext } from "react";
import AppContext from "../context/AppContext";
import style from "../css/banner.module.css";

const BannerComponent = () => {
  const { handleRedirection } = useContext(AppContext);

  return (
    <div id="banner-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["banner-container"]}>
          <h3>lorem ipsum dolor</h3>
          <h1>Shape Your Future</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
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
