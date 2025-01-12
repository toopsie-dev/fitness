import style from "../../css/contact.module.css";
import ContactUsComponent from "../Footer/ContactUsComponent";
import FormComponent from "./FormComponent";

const ContactComponent = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["contact-container"]}>
          <div className={style["content-box"]}>
            <h3 className={style["sub-title"]}>lorem ipsum dolor</h3>
            <h2 className={style["title"]}>Contact us</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <ContactUsComponent hideTitle={true} />
          </div>
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
