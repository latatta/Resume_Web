import TypeIt from "typeit-react";
import {GoPerson, GoHome, GoMail, GoMarkGithub } from "react-icons/go";
import {FaLinkedin} from "react-icons/fa";

function About() {
    return (
        <section id="about">
            <div id="introduction">
                <div className="typeit">
                    <TypeIt options={{
                        strings: ["Hello"],
                        speed: 100,
                        loop: false,
                        waitUntilVisible: true,
                    }}/>
                </div>
                <div id="profile">
                    <h2>ABOUT</h2>
                    <div className="pofile-inner">
                        <div className="profile-img"></div>
                        <div className="profile-list">
                            <ul>
                                <li><GoPerson/><span>Seeun Cheong</span></li>
                                <li><GoMail/><span>seeuncheong@gmail.com</span></li>
                                <li><FaLinkedin/><span>www.linkedin.com/in/seeun-cheong-a74110281</span></li>
                                <li><GoMarkGithub/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

