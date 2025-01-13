import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarContext from "../../context/NavbarContext";
import SidebarComponent from "./SidebarComponent";

const DesktopNavbarComponent = () => {
  const { hideMenuIcon, setHideSideBar } = useContext(NavbarContext);
  return (
    <>
      <nav className="navbar display-flex content-width">
        <div className="logo-container">
          <img src="./images/navbar-logo.png" alt="fitness Logo" />
        </div>
        <div className="navbar-item-container display-flex">
          {/* Desktop Navigation Bar */}
          <ul className="list-nav-item display-flex">
            <li>Home</li>
            <li>About Us</li>
            <li>Trainers</li>
            <li>Plan</li>
            <li>Blog</li>
          </ul>
          {!hideMenuIcon && (
            <RxHamburgerMenu
              size={30}
              style={{ MarginTop: "10px" }}
              onClick={() => setHideSideBar(false)}
            />
          )}
          <button>contact us</button>

          {/* Tablet/Mobile SideBar */}
          <SidebarComponent />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbarComponent;
