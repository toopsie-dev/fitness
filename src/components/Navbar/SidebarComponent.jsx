import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import AppContext from "../../context/AppContext";
import NavbarContext from "../../context/NavbarContext";

const SidebarComponent = () => {
  const { hideSideBar, setHideSideBar } = useContext(NavbarContext);
  const { handleRedirection } = useContext(AppContext);

  return (
    <>
      {!hideSideBar && (
        <ul className="list-nav-item sidebar">
          <li style={{ textAlign: "right", marginTop: "20px" }}>
            <IoMdClose
              size={30}
              style={{ MarginTop: "10px" }}
              onClick={() => setHideSideBar(true)}
            />
          </li>
          <li onClick={() => handleRedirection("home")}>Home</li>
          <li onClick={() => handleRedirection("about-section")}>About Us</li>
          <li onClick={() => handleRedirection("coaches-section")}>Trainers</li>
          <li onClick={() => handleRedirection("plan-section")}>Plan</li>
          <li onClick={() => handleRedirection("blog-section")}>Blog</li>
          <li onClick={() => handleRedirection("contact-section")}>Contact</li>
        </ul>
      )}
    </>
  );
};

export default SidebarComponent;
