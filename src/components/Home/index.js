import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-H.png'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss';
import Logo from './Logo';

const Home = () => {
    
    const[letterClass, setLetterClass] = useState('text-animate')
    const intro = ['H','e','l','l','o',' ','t','h','e','r','e',',','  ','I',' ','a','m',' ']
    const nameArray = ['a','n','s','o','n',' ','A','d','d','o',',']
    const jobArray = ['a',' ','s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4006)
    },[]);

    return (
            
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    
                    <AnimatedLetters letterClass={letterClass}
                    strArray={intro}
                    idx={20} 
                    />                
                    <br />  
                    <img src={LogoTitle} alt="developer" />

                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />

                    <br />  
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={25} />
                </h1>

                <h2>
                    <b><i>And More:</i> </b>Full Stack Developer/ Web Developer / Front End Developer / Backend Developer
                    <br/>                

                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>        
    );
}


export default Home;