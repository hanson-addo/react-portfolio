import './index.scss'
import AnimatedLetter from '../AnimatedLetter'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a software engineer with three years of production experience
            building enterprise web applications — most recently leading
            front-end modernization efforts at ScienceLogic, where I migrated
            legacy interfaces to React and TypeScript and built data-intensive
            tools used by real customers to monitor and troubleshoot their
            systems. I care about the parts of engineering that don't show up in
            a demo: reliability under real production load, code that the next
            engineer can actually understand, and systems that degrade
            gracefully instead of failing silently.
          </p>
          <p>
            I like owning problems end-to-end. On RunAware, a wearable safety
            device I designed and built from scratch, I worked across the entire
            stack — embedded hardware and sensor integration, on-device machine
            learning, a Flask backend, and a React dashboard — because I wanted
            to understand a system fully rather than just the layer I was
            handed. That same instinct shows up in how I work with teams: I'd
            rather dig into the root cause of an intermittent bug than patch the
            symptom, and I'd rather ask a clarifying question upfront than build
            the wrong thing efficiently.
          </p>
          <p>
            I'm currently looking for a team where ownership and technical
            judgment are valued as much as raw output — where I can keep
            building things that are genuinely useful, and keep getting better
            at the craft alongside people I can learn from.
          </p>
          <a
            href="/Hanson_Addo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flat-button"
          >
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
      <Loader type="pacman" />
    </>
  )
}

export default About
