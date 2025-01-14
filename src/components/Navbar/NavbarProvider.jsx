import { useEffect, useState } from "react";
import NavbarContext from "../../context/NavbarContext";

const NavbarProvider = ({ children }) => {
  const [hideMenuIcon, setHideMenuIcon] = useState(true);
  const [hideSideBar, setHideSideBar] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.innerWidth < 960 ? setHideMenuIcon(false) : hideMenuIcon;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideMenuIcon, isSticky]);

  const handleScroll = () => {
    window.pageYOffset > 0 ? setIsSticky(true) : setIsSticky(false);
  };

  return (
    <>
      <NavbarContext.Provider
        value={{
          hideMenuIcon,
          hideSideBar,
          setHideSideBar,
          setHideMenuIcon,
          isSticky,
        }}
      >
        {children}
      </NavbarContext.Provider>
    </>
  );
};

export default NavbarProvider;
