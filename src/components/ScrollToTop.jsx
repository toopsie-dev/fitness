import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400
        ? setShowScrollTopIcon(true)
        : setShowScrollTopIcon(false);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopIcon && (
        <div className="scroll-top-icon" onClick={scrollTop}>
          {<IoIosArrowUp color="white" size={20} />}
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
