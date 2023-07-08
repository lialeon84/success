import React from 'react'
import homepic from './img/Home.png';
import servicespic from './img/Features.png';

import webdev from './img/webdev.png';
import tech from './img/tech.png';
import focus from './img/Focus.png';
import laptop from './img/laptop.png';

function Home() {
  // event.preventDefault();
    
    
   
  // function handleClick() { 
  //   let randomNum = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNum);
  //   let userInput = prompt('type a number'); 
  //   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  // }
  return (
    
    <>
    
    <br></br>
    <section>
      <div className="blog-post-intro">
         <div className='imgWrappertwo'>
              <img src={homepic} alt="HomePic" className="img-fluidtwo"/>
           </div>
         </div>
     
    </section>
       
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">Welcome to our coding, tech, and learning platform! Where we unleash the quirky and practical side of coding. 
          We're excited to share valuable insights, tips, and tricks with you. 
          
          </p> 
           </div> 
         <hr></hr>
         <br></br>
    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={laptop} alt="Laptop" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">Our app is dedicated to empowering you with knowledge in JavaScript and React.js. 
          Whether you're a beginner or looking to enhance your skills, we have you covered.</p> 
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={webdev} alt="Web" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">Discover the best keyboards, laptops, and other essential tools that will elevate your coding experience. 
          We understand the importance of using the right equipment to optimize your productivity and efficiency.</p>  
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={tech} alt="Tech" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text"> In addition to technical advice, we provide practical tips and tricks to help you maintain 
          focus on what truly matters. We understand the challenges of navigating distractions and staying motivated in the 
          fast-paced world of technology.</p>  
           </div>
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={focus} alt="Focus" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">But that's not all! We have a wealth of content awaiting you, covering various topics related 
          to coding, tech trends, learning strategies, and much more. Our goal is to support your growth and inspire you 
          on your coding journey.</p> 
          <p>
          So, get ready to dive in and unlock a world filled with laughter, knowledge, insights, and resources. 
          Let's embark on this exciting adventure together! 
            </p> 
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={servicespic} alt="Service" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
           {/* <hr></hr>
           <div className="wrapper">
            <p className="text-center">Talk To Us </p>
            </div> 
            <hr></hr>
        <br></br>
        <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={contactpic} alt="Myself" className="img-fluidtwo"/>
             </div>
           </div>
        </section>
           <br></br> */}
          
           
   

    </>
    // <div>
    //   <button onClick={handleClick}>
    //     Click Me
    //   </button>
    // </div>
  )
  
}

export default Home