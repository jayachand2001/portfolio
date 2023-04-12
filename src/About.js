import React from 'react'
import profilepic from './images/profilepic.jpg'

export default function About() {
  return (
    <div id="about">
      <div className='about-intro'>
        <h2 className='headings' >ABOUT</h2>
        <h1 className='sub-heading'>Let me introduce myself</h1>
      </div><br></br>
      <div className='about-info'>
        <div className='profilephoto'>
          <img src={profilepic} alt='Profile Pic' />
        </div>
        <div className='lead'>
          <p>I love to explore the field of Web-Development, its applications, and AI.</p><br></br>
          <p> Besides, I love  Anime. I am very enthusiastic about acquiring knowledge of new technologies and I love what I do.</p>
        </div>
      </div><br></br><br></br><br></br>
      <div className="about-content">
        <div className="profile">
          <h3>PROFILE</h3><br></br>
          <p>"Life is not a game of luck.If you want to win, work hard." - Sora</p><br></br>
            <ul class="info-list">
              <li>
                <strong>Fullname:</strong>
                <span>Bokka Jayachand</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>Jan 24,2001</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+91-831-752-3130</span>
              </li>
              <li>
                <strong>Website:</strong>
                <span><a href='https://jayachand2001.vercel.app' target="_blank" rel='noopener noreferrer'>jayachand2001.vercel.app</a></span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>jaychand2001@gmail.com</span>
              </li>
              <li>
                <strong>Languages:</strong>
                <span>English, Telugu,Hindi</span>
              </li>

            </ul>
        </div>
        <div className="skills">
          <h3>SKILLS</h3><br></br>
            <ul class="info-list">
              <li>
                <strong>WEB DEVELOPMENT:</strong>
                <span>HTML, CSS, JavaScript</span>
              </li>
              <li>
                <strong>DATABASE:</strong>
                <span>SQL</span>
              </li>
              <li>
                <strong>PROGRAMMING:</strong>
                <span>C, Java, Python</span>
              </li>
              <li>
                <strong>STATISTICS:</strong>
                <span>Matlab</span>
              </li>
              <li>
                <strong>FRAMEWORKS:</strong>
                <span>Django, Full stack(MERN),Git</span>
              </li>
              <li>
                <strong>OPERATING SYSTEM:</strong>
                <span>Windows, Ubuntu</span>
              </li>

            </ul>

        </div>
      </div><br></br><br></br><br></br>
      <div className='button-section'>
        <a href='https://docs.google.com/document/d/10kZGVB_QV6HLyjfokGwkF2aCtbRM0JBB2u21kUFSYjs/edit?usp=sharing' target="_blank" rel='noopener noreferrer' className='button '>DOWNLOAD CV</a>
      </div>
    </div>
  )
}
