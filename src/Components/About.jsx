import React from 'react';
import Skills from './Skills.jsx';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
            {/* <img src="https://media.wired.com/photos/592682057034dc5f91bebab8/1:1/w_200,h_200,c_limit/NetflixLogo2016.jpg" alt="" /> */}
          </Tilt>
        </div>

        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          {/* <p>
            Hi, my name is <b>Anirban Mahata </b>
            I'm a <b>Frontend web developer</b> and a final year college student pursuing <b>M.C.A</b> At DR BC Roy Engerning college. <br /><br />
            I have done my BCA from <b>Vidyasagar University</b> .
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            Apart from coding I love to do play game , you can check out  my YT here <a href="https://www.youtube.com/@advh1826" target='_blank'>Youtube.</a>

          </p> */}
          <p>A <b> passionate front-end web developer</b> who wants to work in an organization where a culture of freedom
and working for initiatives is ensured and wants to facilitate my contribution through thoughts and
actions to the company’s vision and thus achieve self-development by playing a significant role in building
the organization</p>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About