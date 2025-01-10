import BannerComponent from "./components/BannerComponent";
import ClassesComponent from "./components/Classes/ClassesComponent";
import CoachComponent from "./components/Coach/CoachComponent";
import GoalComponent from "./components/Goal/GoalComponent";
import NavbarComponent from "./components/Navbar/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <GoalComponent />
      <ClassesComponent />
      <CoachComponent />
    </>
  );
}

export default App;
