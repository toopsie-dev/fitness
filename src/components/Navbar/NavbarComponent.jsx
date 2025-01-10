import DesktopNavbarComponent from "./DesktopNavbarComponent";
import NavbarProvider from "./NavbarProvider";

const NavbarComponent = () => {
  return (
    <NavbarProvider>
      <div className="container">
        <DesktopNavbarComponent />
      </div>
    </NavbarProvider>
  );
};

export default NavbarComponent;
