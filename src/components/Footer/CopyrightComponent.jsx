import style from "../../css/footer.module.css";

const CopyrightComponent = () => {
  return (
    <div className={style["copyright-container"]}>
      <div className={style["left-box"]}>
        <h4>
          Copyright 2024 <span>Fitness Gym</span>. All Rights Reserved.
        </h4>
      </div>
      <ul className={style["right-box"]}>
        <li>Privacy Policy</li>
        <li>Terms & Condition</li>
      </ul>
    </div>
  );
};

export default CopyrightComponent;
