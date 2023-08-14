import React from 'react'

import cube from "./img/cube.mov";
import office from "./img/office.mov";
import panel from "./img/panel.mov";
import picnic from "./img/picnic.mov";
import starwars from "./img/starwars.mov";



function Gallery() {

    const GALLERIES = [

        {
            id: 1,
            video: cube,
            projectName: "Application Queue",
            description: "I designed a visually engaging application queue for my previous employer to enhance the user experience during wait times.",
           
        },
        {
            id: 2,
            video: office,
            projectName: "Check Cashing App",
            description: "I developed a comprehensive backup check-cashing system for my former employer, showcasing real-time fee percentages and amounts. This intuitive system also provides a detailed history for customers, highlighting their past transactions, including any returned checks and their overall standing.",
           
        },
        {
            id: 3,
            video: panel,
            projectName: "System Alert",
            description: "I designed a unique dashboard, inspired by the iconic Death Star from Star Wars, to proactively notify my superiors of server downtimes. A flashing signal on the dashboard instantly indicates any server failures, ensuring swift action and minimal downtime.",
           
        },
        {
            id: 4,
            video: picnic,
            projectName: "Magical Picnic",
            description: "I crafted a bespoke application tailored for a family member's pop-up picnic venture. This intuitive platform empowers customers to choose their preferred date and picnic style, seamlessly transmitting their choices to the business for a tailored experience.",
            
        },
        {
            id: 5,
            video: starwars,
            projectName: "Lightsabers",
            description: "Inspired by my deep admiration for Star Wars, I designed an interactive feature where lightsabers illuminate or retract upon a click, bringing the cinematic experience to life.",
           
        }
    ]
   
    return (
        
        <div className="blog-post-intro py-6 ">
          <br></br>
            <h2 className=''>Showcase of My Creative Endeavors</h2>
           <hr className="border-25 h-1 bg-fuchsia-600  border-fuchsia-600 glow-fuchsia-600 rounded-full glow"></hr>
           <br></br>
           
            <div className="video-gallery-container">
        {GALLERIES.map((galleryItem, index) => (
             <div key={index} className="video-with-description">
             <video controls className="video-item">
                 <source src={galleryItem.video} type="video/mp4" />
                 Your browser does not support the video tag.
             </video>
             <p className="video-title">{galleryItem.projectName}</p>
             <p className="video-description">{galleryItem.description}</p>
         </div>
))}

    </div>
        </div>
    );
};

export default Gallery;