import logo from '../../assets/logo.png';
import { CgMenuHotdog } from "react-icons/cg";

function Navigation() {
    return (
        <section id='navigation'>
            <nav className='nav'>
                <a href="#" id='logo'>Seeun&nbsp;Cheong</a>
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;