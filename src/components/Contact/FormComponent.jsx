import style from "../../css/contact.module.css";

const FormComponent = () => {
  return (
    <div className={style["form-container"]}>
      <h3>{`let's connect`}</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email Address" />
        <textarea name="" id="" placeholder="Message" rows="4"></textarea>
        <button>send message</button>
      </form>
    </div>
  );
};

export default FormComponent;
