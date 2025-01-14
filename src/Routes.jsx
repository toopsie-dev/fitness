import { Route, Routes } from "react-router-dom";
import BannerComponent from "./components/BannerComponent";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/fitness" element={<BannerComponent />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
