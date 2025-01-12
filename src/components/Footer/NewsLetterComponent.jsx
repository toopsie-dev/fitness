import style from "../../css/footer.module.css";

const NewsLetterComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email Submitted!");
  };

  return (
    <div className={style["newsletter-container"]}>
      <h3>Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" required />
        <button type="submit">subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetterComponent;
