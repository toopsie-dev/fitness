import style from "../../css/footer.module.css";

const ContactUsComponent = () => {
  return (
    <div className={style["contact-us-container"]}>
      <h3>Contact us</h3>
      <ul className={style["contact-details"]}>
        <li>
          <a href="">
            <img src="src/assets/Icon material-location-on.png" alt="" />
            <span>
              1234/plot No.99, 5th phase, Fojnica Bosnia and Herzegovina
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="src/assets/Icon material-local-phone.png" alt="" />
            <span>+99 192 837 4650</span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="src/assets/Icon zocial-email.png" alt="" />
            <span>fitnessgym@email.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUsComponent;
