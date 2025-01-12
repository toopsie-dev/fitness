import style from "../../css/footer.module.css";

const SocialMediaComponent = () => {
  return (
    <div className={style["social-media-container"]}>
      <img src="src/assets/navbar-logo.png" alt="fitness Logo" />
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
      <ul className={style["social-icons"]}>
        <li>
          <a href="">
            <img src="src/assets/Icon awesome-facebook-f.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="src/assets/Icon awesome-twitter.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="src/assets/Icon awesome-linkedin-in.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="src/assets/Icon feather-instagram.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaComponent;
