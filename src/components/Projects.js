import React from 'react'
import dumbopic from '../images/dumbo.png'
import helkapic from '../images/helka.png'
import sketchtofacepic from '../images/Female sketch to face.png'
import { useState } from 'react'
import './Projects.css'
export default function Projects() {
    const [model1, setmodel1] = useState(false);

    const togglemodel1 = () => {
        setmodel1(!model1);
    }
    const [model2, setmodel2] = useState(false);

    const togglemodel2 = () => {
        setmodel2(!model2);
    }
    const [model3, setmodel3] = useState(false);

    const togglemodel3 = () => {
        setmodel3(!model3);
    }


    return (
        <div id='projects'>
            <div className='projects-intro'>
                <h2 className='headings'>Projects</h2>
                <h1 className='sub-heading'>Check Out Some of My Projects.</h1>
            </div><br></br>
            <div className='projects-info'>

                <div className='project'>
                    <div>
                        <img src={dumbopic} alt='Dumbo' />
                        <h2>Dumbo</h2>
                        <a href='#Dumbo' onClick={togglemodel1} className='overlay1'>
                            <div className='projectname'>
                                <h1>Dumbo</h1>
                                <p>Service-oriented Application Development</p>
                            </div>
                        </a>
                    </div>
                </div>
                {model1 && (
                    <div id='Dumbo'>
                        <div className='overlay' onClick={togglemodel1}></div>
                        <div className="modal-content popup-modal slider mfp-hide">

                            <div className="media">
                                <img src={dumbopic} alt='Dumbo' />
                            </div>

                            <div className="description-box">
                                <h4>Dumbo</h4>
                                <h4>Service-oriented Application Development(Aug 2020 - Dec 2020)</h4>
                                <p>(under the guidance of Dr. Subu Kandaswamy)</p>
                                <p>● Dumbo is a service-based web application that lets its users upload, store and search
                                    through documents. Other websites can integrate the Dumbo services into their
                                    application.</p>
                                <p>● My Work: I have done User verification, and profile page, assisted in integrating with
                                    google cloud and created one API feature.</p>
                                <p>● Framework: Django, Github Front end: HTML, CSS, Bootstrap, and some other APIs
                                    that are required for application.</p>
                            </div>

                            <div className="link-box">
                                <a href="https://github.com/jayachand2001/dumbo" target="_blank" rel='noopener noreferrer'>Details</a>
                                <a  onClick={togglemodel1} className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                    </div>
                )}
                <div className='project'>
                    <img src={helkapic} alt='Helka' />
                    <h2>Helka</h2>
                    <a href='#Helka' onClick={togglemodel2} className='overlay1'>
                        <div className='projectname'>
                            <h1>Helka</h1>
                            <p>Enterprise Application Development</p>
                        </div>
                    </a>
                </div>
                {model2 && (<div id='Helka'>
                    <div className='overlay' onClick={togglemodel2}></div>
                    <div className="modal-content popup-modal slider mfp-hide">

                        <div className="media">
                            <img src={helkapic} alt='Helka' />
                        </div>

                        <div className="description-box">
                            <h4>Enterprise Application Development(Jan 2021 - April 2021)</h4>
                            <p>(under the guidance of Dr. Balaji Ramana)</p>
                            <p>● Secure personalized news. It can get relevant news based on keyword searches.
                                News articles from all over the internet can be stored for future reference.</p>
                            <p>● My Work: I have done the bookmarks feature.</p>
                            <p>● Stack:React Node MongoDB Express(MERN)</p>
                        </div>

                        <div className="link-box">
                            <a href="https://github.com/jayachand2001/helka" target="_blank" rel='noopener noreferrer'>Details</a>
                            <a onClick={togglemodel2} className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                </div>)}
                <div className='project'>
                    <img src={sketchtofacepic} alt='Sketchtoface' />
                    <h2>Sketch to Face</h2>
                    <a href='#Sketchtoface' onClick={togglemodel3} className='overlay1'>
                        <div className='projectname'>
                            <h1>SketchtoFace</h1>
                            <p>Deep Learning</p>
                        </div>
                    </a>
                </div>
            </div>
            {model3 && (<div id='Sketchtoface'>
                <div className='overlay' onClick={togglemodel3}></div>
                <div className="popup-modal slider mfp-hide">
                    <div className="media">
                        <img src={sketchtofacepic} alt='SketchtoFace' />
                    </div>

                    <div className="description-box">
                        <h4>Deep Learning</h4>
                        <p>(under the guidance of Dr. Subu Kandaswamy)(Jan 2021 - Jan 2022)</p>
                        <p>● Given a forensic sketch face image as input, we suggest potential matches to the face
                            from a photo gallery (similar to a mugshot database).</p>
                        <p>● Cycle Gan and siamese network</p>
                    </div>

                    <div className="link-box">
                        <a href="https://github.com/jayachand2001/Sketch2Face" target="_blank" rel='noopener noreferrer'>Details</a>
                        <a onClick={togglemodel3} className="popup-modal-dismiss">Close</a>
                    </div>
                </div>
            </div>)}




        </div>
    )
}
