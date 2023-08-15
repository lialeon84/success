import React from 'react'
import { useNavigate } from 'react-router-dom';
import webNum from './img/webpic.jpg'
import game from "./img/game.png";
import cards from './img/close-up-of-pictures.jpg'
import number from "./img/Numbers.png";
import arcade from "./img/arcade.jpg";
import '../allblogs.css'



function Projects() {
    const navigate = useNavigate();

    const PROJECTS = [

        {
            id: 1,
            pic: number,
            link: 'https://lialeon84.github.io/luckynum/',
            title: "Lucky Numbers",
            description: "",
           
        },
        {
            id: 2,
            pic: cards,
            link: 'https://lialeon84.github.io/flashback2/',
            title: "Flash Cards",
            description: "",
           
        },
        {
            id: 3,
            pic: game,
            link: '/game',
            title: "Jailbreak",
            description: "",
           
        },
        {
            id: 4,
            pic: webNum,
            link: '/amazon',
            title: "Amazon Subscription Chart",
            description: "",
            
        },
        {
            id: 5,
            pic: arcade,
            link: 'https://lialeon84.github.io/doodler/',
            title: "Doodler Game",
            description: "",
            
        },
        
    ]
   
    return (
        
        <div className="blog-post-intro py-6 ">
          <br></br>
            <h2 className=''>Personal Projects</h2>
          
           <br></br>
           <div className="deals-container">
    {PROJECTS.map((project, index) => (
      <div key={index} className="card-container">
        <div className="card">
          <img src={project.pic} alt={project.pic} className="card-image" />
          <div className="card-title">{project.title}</div>
          
          <div className="card-description">{project.description}</div>
         
          {
                project.link.startsWith('http') ?
                    // External link
                    <button type="button" className='goToPage' onClick={(e) => {
                        e.preventDefault();
                        window.open(`${project.link}`, "_blank")}}>View</button> :
               
                     // Internal link
                   <button type="button" className='goToPage' onClick={(e) => {
                                    e.preventDefault();
                                    navigate(project.link);
                     }}> View </button>
            }
           
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default Projects;