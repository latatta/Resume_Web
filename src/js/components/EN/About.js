
import { GoPerson, GoHome, GoMail } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImg from '../../../assets/IMG_0480.jpg';


function About() {
    return (
        <section id="profile">
            <div className="About">
                <h1>Profile</h1>
                <div className="about_inner">
                    <div id="profile_img"><img src={profileImg} alt="Dory" /></div>
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
                </div>
            </div>
            <div className="Education">
                <h1>Education</h1>
                <ul>
                    <li><div className="date edu_list"><strong>2018.09 ~ 2024.06</strong></div>
                        <div className="edu_list"><h4>University of Waterloo</h4>
                            <p>Bachelor of Mathematics, General</p></div></li>
                    <li><div className="date edu_list"><strong>2021.12 ~ 2022.05</strong></div>
                        <div className="edu_list"><h4>Korea IT Academy</h4>
                            <p>Industrial Engineer Information Processing Certificate</p></div></li>
                </ul>
            </div>
            <div className="Certificate">
                <h1>Certificate</h1>
                <ul>
                    <li><div className="date cert_list"><strong>2024.07</strong></div>
                        <div className="cert_list"><h4>Industrial Engineer Information Processing Certificate</h4></div></li>
                </ul>
            </div>
            <div className="Experience">
                <h1>Experience</h1>
                <ul>
                    <li><div className="date list"><strong>2022.10 ~ 2022.12</strong></div>
                        <div className="exp_list"><h4>Bizcare</h4>
                            <p>Full Stack Developer</p></div></li>
                </ul>
            </div>
        </section>
    )
}

export default About;

