import React from 'react'
import { useNavigate } from 'react-router-dom';
import jspic from './img/js.png'
import game from "./img/game.png";
import reactpic from './img/react.png'
import number from "./img/Numbers.png";
import '../allblogs.css'



function Projects() {
    const navigate = useNavigate();

    const PROJECTS = [

        {
            id: 1,
            pic: jspic,
            link: '/js',
            title: "Mastering JavaScript Functions",
            description: "",
           
        },
        {
            id: 2,
            pic: reactpic,
            link: '/reactpage',
            title: "A Beginner's Guide to Launching Your React Journey",
            description: "",
           
        },
        // {
        //     id: 3,
        //     pic: game,
        //     link: '/game',
        //     title: "Jailbreak",
        //     description: "",
           
        // },
        // {
        //     id: 4,
        //     pic: number,
        //     link: '/amazon',
        //     title: "Amazon Subscription Chart",
        //     description: "",
            
        // },
        
    ]
   
    return (
        
        <div className="blog-post-intro py-6 ">
          <br></br>
            <h2 className=''>Programming Guide </h2>
          
           <br></br>
           <div className="deals-container">
    {PROJECTS.map((blog, index) => (
      <div key={index} className="card-container">
        <div className="card">
          <img src={blog.pic} alt={blog.pic} className="card-image" />
          <div className="card-title">{blog.title}</div>
          
          <div className="card-description">{blog.description}</div>
         
          <button type="button" className='goToPage' onClick={(e) => {
                  e.preventDefault(); navigate(blog.link); }}>
                                View 
                            </button>
           
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default Projects;