import logo from '../logo.svg';
import '../css/App.css';
import TypeIt from "typeit-react";
import Navigation from "./components/Navigation";
import About from "./components/EN/About";
import Projects from "./components/EN/Projects";
import Skills from "./components/EN/Skills";
import Contact from "./components/EN/Contact";


function App() {
  return (
    <div class="fullpage">
      <header id='header'>
        <Navigation />
      </header>
      <div class="content">
        <div className="typeit">
          <TypeIt options={{
            strings: ["Hello, My name is Seeun Cheong.:)"],
            speed: 100,
            loop: false,
            waitUntilVisible: true,
            loop: false,
          }} />
        </div>
        <About />
        <Skills />
        <Projects />
      </div>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
