import style from "../../css/footer.module.css";

const SocialMediaComponent = () => {
  return (
    <div className={style["social-media-container"]}>
      <img src="./images/navbar-logo.png" alt="fitness Logo" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      <ul className={style["social-icons"]}>
        <li>
          <a href="">
            <img src="./images/Icon awesome-facebook-f.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Icon awesome-twitter.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Icon awesome-linkedin-in.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Icon feather-instagram.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaComponent;
