import { useContext } from "react";
import PlanContext from "../../context/PlanContext";
import style from "../../css/plan.module.css";

const PlanCardComponent = () => {
  const { plans } = useContext(PlanContext);

  return (
    <div className={style["body-container"]}>
      {plans.map((plan, index) => (
        <div key={index} className={style["plan-card"]}>
          <h5 className={style["plan-title"]}>{plan.level}</h5>
          <p>
            <span className={style["plan-price"]}>${plan.price} </span>/ per
            month
          </p>
          <ul className={style["coverage-container"]}>
            {plan.coverages.map((coverage, index) => (
              <div key={index}>
                <li>{coverage}</li>
              </div>
            ))}
          </ul>
          <button>get started</button>
        </div>
      ))}
    </div>
  );
};

export default PlanCardComponent;
