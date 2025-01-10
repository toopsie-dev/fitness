import { useEffect, useState } from "react";
import NavbarContext from "../../context/NavbarContext";

const NavbarProvider = ({ children }) => {
  const [hideMenuIcon, setHideMenuIcon] = useState(true);
  const [hideSideBar, setHideSideBar] = useState(true);

  useEffect(() => {
    window.innerWidth < 960 ? setHideMenuIcon(false) : hideMenuIcon;
  }, [hideMenuIcon]);

  return (
    <>
      <NavbarContext.Provider
        value={{ hideMenuIcon, hideSideBar, setHideSideBar, setHideMenuIcon }}
      >
        {children}
      </NavbarContext.Provider>
    </>
  );
};

export default NavbarProvider;
