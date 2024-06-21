import TypeIt from "typeit-react";
import {GoPerson, GoHome, GoMail} from "react-icons/go";
import {FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
    return (
        <section id="about">
            <div id="introduction">
                <div className="typeit">
                    <TypeIt options={{
                        strings: ["Hello, My name is Seeun Cheong"],
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
                                <li><FaGithub /><span>https://github.com/latatta</span></li>
                            </ul>
                        </div>
                        <div className="Education">
                            <ul>
                                <li><strong>Sep 2018 ~ June 2024</strong>
                                <h4>University of Waterloo</h4>
                                <p>Bachelor of Mathematics, General</p></li>
                                <li><strong>Dec 2021 ~ May 2022</strong>
                                <h4>Korea IT Academy</h4>
                                <p></p></li>
                            </ul>
                        </div>
                        <div className="Certificate">
                            <ul>
                                <li><strong>2024</strong>
                                <h4>Industrial Engineer Information Processing Certificate</h4></li>
                            </ul>
                        </div>
                        <div className="Experience">
                            <ul>
                                <li><strong>Oct 2022 ~ Dec 2022</strong>
                                <h4>Bizcare</h4>
                                <p>Full Stack Developer</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

