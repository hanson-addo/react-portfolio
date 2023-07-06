import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter'
import './index.scss';

const HeadTag = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const head =['M','y',' ','P','o','r','t','f','o','l','i','o',' ']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4006)
    },[]);

    return (
        <div className='container head-container'>
            <h1>
                <AnimatedLetters letterClass={letterClass}
                    strArray={head}
                    idx={35} 
                />  
            </h1> 
            <br />      
        </div>
    )
}

export default HeadTag;