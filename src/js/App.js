import logo from '../logo.svg';
import '../css/App.css';
import Navigation from "./components/Navigation";
import About from "./components/EN/About";
import Projects from "./components/EN/Projects";
import Skills from "./components/EN/Skills";
import Contact from "./components/EN/Contact";


function App() {
  return (
    <div class="fullpage">
      <header>
        <Navigation />
      </header>
      <div class="content">
        <About />
        <Projects />
        <Skills />
      </div>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
