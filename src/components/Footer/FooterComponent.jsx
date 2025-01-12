import style from "../../css/footer.module.css";
import ContactUsComponent from "./ContactUsComponent";
import CopyrightComponent from "./CopyrightComponent";
import NewsLetterComponent from "./NewsLetterComponent";
import SocialMediaComponent from "./SocialMediaComponent";

const FooterComponent = () => {
  return (
    <div className={style["container"]}>
      <div className={style["content-width"]}>
        <div className={style["footer-container"]}>
          <div className={style["top"]}>
            <SocialMediaComponent />
            <ContactUsComponent />
            <NewsLetterComponent />
          </div>
          <CopyrightComponent />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
