import desktop from '../../../assets/mockup_desktop.png';
import gidle from '../../../assets/gidle.png';

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div id="GIdle">
                <img src={gidle} id='gpic'/>
                <img src={desktop} id='desktop'/> 
                <div id='explanation'>
                <h2>GIdle Fanpage</h2>
                <ul>
                    <li><h3>jQuery, Java, Spring MVC, SQL</h3></li>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects;
