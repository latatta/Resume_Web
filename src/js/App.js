import logo from '../logo.svg';
import '../css/App.css';
import Navigation from "./components/EN/Navigation";
import About from "./components/EN/About";
import Projects from "./components/EN/Projects";
import Skills from "./components/EN/Skills";
import Contact from "./components/EN/Contact";

function App() {
  return (
    <header>
      <div class="app">
        <Navigation />
        <main>
          <div class="container">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </header>
  );
}

export default App;
