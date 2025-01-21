import style from "../../css/footer.module.css";

const ContactUsComponent = ({ hideTitle }) => {
  return (
    <div className={style["contact-us-container"]}>
      {hideTitle ? "" : <h3>Contact us</h3>}
      <ul className={style["contact-details"]}>
        <li>
          <a href="">
            <img src="./images/Icon material-location-on.png" alt="" />
            <span>
              1234/plot No.99, 5th phase, Fojnica Bosnia and Herzegovina
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Icon material-local-phone.png" alt="" />
            <span>
              <a href="tel:+639666907559">+63 966 690 7559</a>
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/Icon zocial-email.png" alt="" />
            <a href="mailto:fitnessgym@email.com">fitnessgym@email.com</a>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactUsComponent;
