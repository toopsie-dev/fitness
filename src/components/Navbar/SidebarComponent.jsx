import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import NavbarContext from "../../context/NavbarContext";

const SidebarComponent = () => {
  const { hideSideBar, setHideSideBar } = useContext(NavbarContext);
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
          <li>Home</li>
          <li>About Us</li>
          <li>Trainers</li>
          <li>Plan</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};

export default SidebarComponent;
