import { useReducer } from "react";
import AppContent from "../context/AppContext";

const AppProvider = ({ children }) => {
  // Condition button link redirection
  const reducer = (state, action) => {
    switch (action.type) {
      case "banner-section":
        return (window.location.href = "#banner-section");
      case "goal-section":
        return (window.location.href = "#goal-section");
      case "classes-section":
        return (window.location.href = "#classes-section");
      case "coaches-section":
        return (window.location.href = "#coaches-section");
      case "about-section":
        return (window.location.href = "#about-section");
      case "plan-section":
        return (window.location.href = "#plan-section");
      case "testimonial-section":
        return (window.location.href = "#testimonial-section");
      case "blog-section":
        return (window.location.href = "#blog-section");
      case "contact-section":
        return (window.location.href = "#contact-section");
      case "inspirational-section":
        return (window.location.href = "#inspirational-section");
      default:
        return (window.location.href = "#");
    }
  };

  const initialLink = { link: "" };
  const [link, dispatch] = useReducer(reducer, initialLink);
  const handleRedirection = (section) => {
    dispatch({ type: section });
  };

  return (
    <AppContent.Provider value={{ link, handleRedirection }}>
      {children}
    </AppContent.Provider>
  );
};

export default AppProvider;
