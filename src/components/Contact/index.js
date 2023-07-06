import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetter from '../AnimatedLetter';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },2000)
    },[]);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_s1h5uqp','template_tz5cnfk', refForm.current ,'Y_UVQbIfPOdWJWqxH')
        .then(
            () => {
                alert('Message succefully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please send again')
            }
        )
            
    
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Eager to apply my knowledge in a challenging and dynamic work environment.
                        Seeking a software developer position to utilize my technical skills and 
                        contribute to innovative software solutions. If you have any questions, 
                        please feel free to contact me using the forms below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Your Name' type='text' name='name'  required />
                                </li>
                                <li className='half'>
                                    <input placeholder='Your Email'  type='email' name='email' required />
                                </li>
                                <li>
                                    <input placeholder="The Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="The Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Hanson Addo,
                    <br />
                    United States of America,
                    <br />
                    Alexandria, Virginia, 22309,
                    <br />
                    <span>hanson.kwadwo.addo@gmail.com</span>

                </div>
                
            </div>
            <Loader type='pacman' />
        </>
    )
}


export default Contact;