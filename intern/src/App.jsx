import "./App.css";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Team from "./Components/Team";
import ContactForm from "./Components/ContactForm";
import Achievements from "./Components/Achievements";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <AboutUs />
      <Team />
      <Achievements />
      <ContactForm />
    </div>
  );
}

export default App;
