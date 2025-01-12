import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import style from "../../css/contact.module.css";

const FormComponent = () => {
  const form = useRef();

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Your email are successfully sent!",
      icon: "success",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ypumvse", "template_h12se2k", form.current, {
        publicKey: "wE6bJs9oU0nBZsIyj",
      })
      .then(
        () => {
          e.target.reset();
          showSwal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={style["form-container"]}>
      <h3>{`let's connect`}</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">send message</button>
      </form>
    </div>
  );
};

export default FormComponent;
