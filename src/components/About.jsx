
import React from 'react'
import myPic from './img/myself.jpeg'
 
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
        <p>Programming and software development are perfect fields for me since there's 
          always something new to learn and many ways to approach a problem. I love the idea of collaborating with others to create something new 
          and exciting from the ground up, and finding ways to make it user-friendly. I'm eager to take the next step in my software developer career.
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