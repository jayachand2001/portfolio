import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <div id='contact'>
            <div>
                <div className='contact-intro'>
                    <h2 className='headings'>Contact</h2>
                    <h1 style={{ color: "white", textAlign: "center" }}>I'd Love To Hear From You.</h1>
                </div><br></br><br></br><br></br><br></br>
                <div className='contact-info'>
                    <div className='location'>
                        <div className='contact-icons'>
                        <i class="fa-solid fa-map-location-dot fa-2xl"></i>
                        </div><br></br>
                        <h3>Where to find me</h3><br></br>
                        <p>
                            Amalapuram<br></br>
                            Andha Pradesh<br></br>
                            533201 India
                        </p>
                    </div><br></br>
                    <div className='email'>
                        <div className='contact-icons'>
                            <i class="fa-regular fa-envelope fa-2xl"></i>
                        </div><br></br>
                        <h3>Email Me At</h3><br></br>
                        <p >jayachand2001@gmail.com</p>
                    </div><br></br>
                    <div className='phone'>
                        <div className='contact-icons'>
                        <i class="fa-solid fa-phone fa-2xl"></i>
                        </div><br></br>
                        <h3>Call Me At</h3><br></br>
                        <p>Mobile: (+91) 831-732-3130</p>
                    </div>
                </div><br></br><br></br><br></br>
                <div className='socialmedia'>
                    <a href='https://github.com/jayachand2001' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2xl" style={{color: "white"}}></i></a>
                    <a href='https://www.linkedin.com/in/jayachand-bokka-b28309200/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2xl" style={{color: "white"}}></i></a>
                    <a href='https://www.instagram.com/jayachand2001/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-2xl" style={{color: "white"}}></i></a>
                    <a href='https://twitter.com/jayachand2001' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter fa-2xl" style={{color: "white"}}></i></a>
                </div><br></br><br></br><br></br>
                <div className='copyright'>
                    <p>© Copyright Jayachand 2022. | Design and Developed by Jayachand</p>
                </div><br></br><br></br>
            </div>
        </div>
    )
}
