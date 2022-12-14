
import React from 'react'
import myPic from './img/myself.jpg'
 
function About() { 
  return (
    <div className="blog-post-intro">
   
   
    <div className='imgWrapper'>
      {/* <div className="img-fluid"></div> */}
      <img src={myPic} alt="Myself" className="img-fluid"/>
    </div>
    <div className="wrapper">
    <h2>Who am I?</h2>
    <hr></hr>
        <p>I am Rose! A Full-Stack Web Developer. I have serious passion for animations and creating intuitive dynamic user experiences.
        </p>
        <p> Learning has always been a passion of mine. That is what makes programming and software development such a great field to be in. 
          There are always new things to learn and a lot of ways to approach it. The programming world is all about sharing what we know and working together to solve problems. 
          Creating something completely new and interesting from scratch and finding ways to make it easy for users to enjoy.
        </p>
        <p> Building quality websites and applications with C# .Net, HTML, CSS3, JavaScript and React. Optimizing the performance of user-centric high-impact websites. 
          Analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive advantage and revenue growth.
        </p>
        <hr></hr>
    </div>
    
</div>
      )
  // const bird1 = new Audio( 
  //   "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  // ); 
 
  // const bird2 = new Audio( 
  //   "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  // ); 
 
  // function toggle1() { 
  //   if (bird1.paused) { 
  //     bird1.play(); 
  //   } else { 
  //     bird1.pause(); 
  //   } 
  // }; 
 
  // function toggle2() { 
  //   if (bird2.paused) { 
  //     bird2.play(); 
  //   } else { 
  //     bird2.pause(); 
  //   } 
  // }; 
 
  // return ( 
  //   <div> 
  //     <button onClick={toggle1}>Caspian Tern 1</button> 
  //     <button onClick={toggle2}>Caspian Tern 2</button> 
  //   </div> 
  // ); 
} 
 
export default About;