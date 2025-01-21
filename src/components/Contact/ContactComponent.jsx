/* eslint-disable react/no-unescaped-entities */
import style from "../../css/contact.module.css";
import ContactUsComponent from "../Footer/ContactUsComponent";
import FormComponent from "./FormComponent";

const ContactComponent = () => {
  return (
    <div id="contact-section" className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["contact-container"]}>
          <div className={style["content-box"]}>
            <h3 className={style["sub-title"]}>Get in Touch</h3>
            <h2 className={style["title"]}>Contact us</h2>
            <p>
              Have questions or need assistance? We're here for you! Whether
              you're looking to join our gym, book a class, or speak with one of
              our expert coaches, we'd love to hear from you. Reach out via
              phone, email, or stop by in person. Let’s start your fitness
              journey together!
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
