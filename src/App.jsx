import AboutComponent from "./components/AboutComponent";
import AppProvider from "./components/AppProvider";
import BannerComponent from "./components/BannerComponent";
import BlogComponent from "./components/Blog/BlogComponent";
import ClassesComponent from "./components/Classes/ClassesComponent";
import CoachComponent from "./components/Coach/CoachComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import GoalComponent from "./components/Goal/GoalComponent";
import InspirationComponent from "./components/InspirationComponent";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import PlanComponent from "./components/Plan/PlanComponent";
import TestimonialComponent from "./components/Testimonial/TestimonialComponent";

function App() {
  return (
    <>
      <AppProvider>
        <NavbarComponent />
        <BannerComponent />
        <GoalComponent />
        <ClassesComponent />
        <CoachComponent />
        <AboutComponent />
        <PlanComponent />
        <TestimonialComponent />
        <BlogComponent />
        <ContactComponent />
        <InspirationComponent />
        <FooterComponent />
      </AppProvider>
    </>
  );
}

export default App;
