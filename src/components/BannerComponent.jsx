import style from "../css/banner.module.css";

const BannerComponent = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["banner-container"]}>
          <h3>lorem ipsum dolor</h3>
          <h1>Shape Your Future</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <button>select a plan</button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
