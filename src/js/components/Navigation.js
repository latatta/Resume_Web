import logo from '../../assets/logo.png';
import { CgMenuHotdog } from "react-icons/cg";

function Navigation() {
    return (
        <section className="navigation silkscreen">
            <div className="logo">
                <a href="/"><img src={logo} id="logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="menu"><CgMenuHotdog /></div>
        </section>
    )
}

export default Navigation;