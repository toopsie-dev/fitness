import { useReducer } from "react";
import AppContent from "../context/AppContext";

const AppProvider = ({ children }) => {
  // Condition button link redirection
  const reducer = (state, action) => {
    switch (action.type) {
      case "plan-section":
        return (window.location.href = "#" + action.type);
      default:
        break;
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
