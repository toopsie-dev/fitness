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
            <h3 className={style["sub-title"]}>lorem ipsum</h3>
            <h2 className={style["title"]}>What are you waiting for?</h2>
          </div>
          <div className={style["body-container"]}>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
