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
              <img src={homepic} alt="Myself" className="img-fluidtwo"/>
           </div>
         </div>
     
    </section>
       
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">I created this app to share tips and tricks on coding, tech and learning.</p> 
           </div> 
         <hr></hr>
         <br></br>
    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={laptop} alt="Myself" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">You'll learn about JavaScript and React.js</p> 
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={webdev} alt="Myself" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">I'll show you all you need when it comes to keyboards, laptops and more.</p>  
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={tech} alt="Myself" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">Tips and tricks to keep your focus on what's important.</p>  
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={focus} alt="Myself" className="img-fluidtwo"/>
             </div>
           </div> 
         
    </section>
    <br></br>
         <hr></hr>
         <div className="wrapper">
          <p className="text">And so much more!</p>  
           </div> 
         <hr></hr>
         <br></br>

    <section>
           <div className="blog-post-intro">
             <div className='imgWrappertwo'>
              <img src={servicespic} alt="Myself" className="img-fluidtwo"/>
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