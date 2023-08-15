import React from 'react'
import { useNavigate } from 'react-router-dom';
import journey from "./img/girljourney.jpeg";
import brain from "./img/brain.png";
import focus from "./img/Focus.png";
import imposter from "./img/imposter.png";
import '../allblogs.css'



function Blogs() {
    const navigate = useNavigate();
    const BLOGS = [

        {
            id: 1,
            pic: journey,
            link: '/Blog',
            title: "My Transformational Journey",
            description: "Discovering Growth and Personal Evolution",
           
        },
        {
            id: 2,
            pic: brain,
            link: '/Learning',
            title: "Decoding the Brain's Learning Process",
            description: "Understanding How We Absorb and Retain Information",
           
        },
        {
            id: 3,
            pic: focus,
            link: '/detox',
            title: "Embarking on a Social Media Detox",
            description: "Experiencing 30 Days Without Social Media: Reflections and Insights",
           
        },
        {
            id: 4,
            pic: imposter,
            link: '/Impostor',
            title: "Unleashing Your Inner Potential",
            description: "Empowering Personal Growth and Fulfillment",
            
        },
        
    ]
   
    return (
        
        <div className="blog-post-intro py-6 ">
          <br></br>
            <h2 className=''>Chronicles of Personal Growth</h2>
          
           <br></br>
           <div className="deals-container">
    {BLOGS.map((blog, index) => (
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

export default Blogs;