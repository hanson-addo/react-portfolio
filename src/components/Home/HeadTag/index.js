import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetter'
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
        <div className='head-container'>

            <h3>
                <AnimatedLetters letterClass={letterClass}
                    strArray={head}
                    idx={35} 
                />  
            </h3>
        
        </div>
    )
}

export default HeadTag;