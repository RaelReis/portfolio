import { Banner } from "./components/Banner";
import { MainNavBar } from "./components/MainNavBar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/ProjectsSection/Projects";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
