import './index.scss';
import AnimatedLetter from '../AnimatedLetter'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },2000)
    },[]);


    return (
        <>
        
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetter 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e',]}
                        idx = {15} />                 
                </h1>
                <p>
                    I am a highly motivated and skilled computer science graduate seeking employment as 
                    a software developer. With a strong educational background and a deep passion for 
                    technology, I am well-equipped to contribute to innovative software solutions. 
                    My commitment to staying updated with the latest trends and advancements in the 
                    field demonstrates my dedication to continuous learning and professional growth.
                </p>
                <p>
                    As a software developer, I am adept at working both independently and collaboratively 
                    within a team. I possess excellent communication skills, enabling me to effectively 
                    convey technical concepts to non-technical stakeholders. My strong attention to detail 
                    ensures the delivery of high-quality software solutions that meet the desired 
                    specifications and requirements.
                </p>
                <p>
                    With my technical expertise, academic achievements, and enthusiasm for the field, 
                    I am confident that I can make a valuable contribution to any software development 
                    team. I am committed to lifelong learning and look forward to leveraging my skills 
                    and passion for technology to make a significant impact in the software development 
                    industry.
                </p>
                <a href="/Hanson K. Addo Resume.pdf" target="_blank" rel="noopener noreferrer" className='flat-button'>
                    View Resume
                </a>
            </div>


            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default About;