import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AppContext from "../../context/AppContext";
import NavbarContext from "../../context/NavbarContext";
import SidebarComponent from "./SidebarComponent";

const DesktopNavbarComponent = () => {
  const { hideMenuIcon, setHideSideBar } = useContext(NavbarContext);
  const { handleRedirection } = useContext(AppContext);
  return (
    <>
      <nav className="navbar display-flex content-width">
        <div className="logo-container">
          <img src="./images/navbar-logo.png" alt="fitness Logo" />
        </div>
        <div className="navbar-item-container display-flex">
          {/* Desktop Navigation Bar */}
          <ul className="list-nav-item display-flex">
            <li onClick={() => handleRedirection("home")}>Home</li>
            <li onClick={() => handleRedirection("about-section")}>About Us</li>
            <li onClick={() => handleRedirection("coaches-section")}>
              Trainers
            </li>
            <li onClick={() => handleRedirection("plan-section")}>Plan</li>
            <li onClick={() => handleRedirection("blog-section")}>Blog</li>
          </ul>
          {!hideMenuIcon && (
            <RxHamburgerMenu
              size={30}
              style={{ MarginTop: "10px" }}
              onClick={() => setHideSideBar(false)}
            />
          )}
          <button onClick={() => handleRedirection("contact-section")}>
            contact us
          </button>

          {/* Tablet/Mobile SideBar */}
          <SidebarComponent />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbarComponent;
