import { Banner } from "./components/Banner";
import { MainNavBar } from "./components/MainNavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

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
