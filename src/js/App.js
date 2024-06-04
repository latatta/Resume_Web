import logo from '../logo.svg';
import '../css/App.css';
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
    <div class="app">
      <Navigation/>
      <main>
        <div class="container">
          <About/>
        </div>
      </main>
    </div>
  );
}

export default App;
