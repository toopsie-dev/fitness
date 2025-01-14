import style from "../../css/plan.module.css";
import PlanCardComponent from "./PlanCardComponent";
import PlanProvider from "./PlanProvider";

const PlanComponent = () => {
  return (
    <>
      <PlanProvider>
        <div id="plan-section" className={style["container"]}>
          <div className={style["content-width"]}>
            <div className={style["plan-container"]}>
              <div className={style["title-container"]}>
                <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
                <h2 className={style["title"]}>start your dream</h2>
              </div>
              <PlanCardComponent />
            </div>
          </div>
        </div>
      </PlanProvider>
    </>
  );
};

export default PlanComponent;
