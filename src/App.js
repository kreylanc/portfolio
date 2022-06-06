import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
