
import { GoPerson, GoHome, GoMail } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";


function About() {
    return (
        <section className="about">
            <div className="profile">
                <h2 className="silkscreen">About</h2>
                <div className="pofile-inner">
                    <div className="profile_img"></div>
                    <div className="profile_list">
                        <ul>
                            <li><GoPerson /><span>: Seeun Cheong</span></li>
                            <li><GoMail /><span>: seeuncheong@gmail.com</span></li>
                            <li><FaLinkedin /><span>
                                <a href="https://www.linkedin.com/in/seeun-cheong-a74110281"
                                    target="_blank" rel="noopener noreferrer">
                                    : www.linkedin.com/in/seeun-cheong-a74110281</a></span></li>
                            <li><FaGithub /><span>
                                <a href="https://github.com/latatta"
                                    target="_blank" rel="noopener noreferrer">
                                    : https://github.com/latatta</a></span></li>
                        </ul>
                    </div>
                    <div className="Education">
                        <h2 className="silkscreen">Education</h2>
                        <ul>
                            <li><div className="date list"><strong>2018.09 ~ 2024.06</strong></div>
                                <div className="list"><h4>University of Waterloo</h4>
                                    <p>Bachelor of Mathematics, General</p></div></li>
                            <li><div className="date list"><strong>2021.12 ~ 2022.05</strong></div>
                                <div className="list"><h4>Korea IT Academy</h4>
                                    <p>Industrial Engineer Information Processing Certificate</p></div></li>
                        </ul>
                    </div>
                    <div className="Certificate">
                        <h2 className="silkscreen">Certificate</h2>
                        <ul>
                            <li><div className="date list"><strong>2024.07</strong></div>
                                <div className="list"><h4>Industrial Engineer Information Processing Certificate</h4></div></li>
                        </ul>
                    </div>
                    <div className="Experience">
                        <h2 className="silkscreen">Experience</h2>
                        <ul>
                            <li><div className="date list"><strong>2022.10 ~ 2022.12</strong></div>
                                <div className="list"><h4>Bizcare</h4>
                                    <p>Full Stack Developer</p></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

