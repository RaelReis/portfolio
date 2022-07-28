import { Banner } from "./components/Banner";
import { MainNavBar } from "./components/MainNavBar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/ProjectsSection/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
