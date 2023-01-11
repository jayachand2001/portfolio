import React from 'react'

export default function Education() {
  return (
    <div id="education">
      <div className='edu-intro'>
        <h2 className='headings'>Education</h2>
      </div><br></br>
      <div className='edu-info'>
        <div className='edu-data'>
          <div className='briefcase-icon'>
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div className='degree'>
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>August 2018 - 2022</p>
          </div>
          <div className='collage-name'>
            <h4>Indian Institute of Information Technology Sricity</h4><br></br>
            <p>Secured 6.39 CGPA.</p>
          </div>
        </div><br></br>
        <div className='edu-data'>
          <div className='briefcase-icon'>
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div className='degree'>
            <h3>Higher Secondary School</h3>
            <p>August 2018 - Present</p>
          </div>
          <div className='collage-name'>
            <h4>Sri Chaitanya Junior college, Vijayawada</h4><br></br>
            <p>Secured 96.4 Percentage.</p>
          </div>
        </div><br></br>
        <div className='edu-data'>
          <div className='briefcase-icon'>
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div className='degree'>
            <h3>Secondary School</h3>
            <p>June 2016 - April 2015</p>
          </div>
          <div className='collage-name'>
            <h4>Sri Chaitanya Techno School</h4><br></br>
            <p>Secured 9.8 CGPA.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
