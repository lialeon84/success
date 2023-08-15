import React from 'react'
import girljourney from './img/girljourney.jpeg'
import working from './img/working.jpg';
import { useNavigate } from 'react-router-dom';


function Blog() {
    const navigate = useNavigate();

    return (
        <div className="blog-post-intro">
            
            <h2 className="text-uppercase">My Transformational Journey</h2>
            {/* <hr></hr> */}
            <div className='imgWrapperthree'>
               <br></br>
              <img src={girljourney} alt="journey" className="img-fluidthree"/>
           </div>

            
            <div className="wrapper">
            <h5 className="text-uppercase">Discovering Growth and Personal Evolution</h5>
            <hr></hr>

            <small className='italic'>"Engineers like to solve problems. If there are no problems handily available, they will create their own problems." ― Scott Adams</small>
                <br></br>

                <p>Ever since I was a child, I possessed a natural knack for repairing things. From gadgets to jewelry, 
                    I could fix them all. When I was just 14 years old, I acquired my first computer. 
                    Without any guidance or prior knowledge, I took it upon myself to set it up. The thrill of installing Google Chrome and 
                    connecting to the vast realm of the World Wide Web was unparalleled. 
                    I delved into the depths of my new computer, realizing that this was my calling.</p>
                   <br></br>

                    <p>During my early twenties, I boldly disassembled my computer, replacing the hard drive with a new one. 
                        The immense satisfaction I derived from this task confirmed my passion for technology and problem-solving.</p>
                   <br></br>
                <p> As I began working at tech companies, assisting customers with their wireless devices, my passion grew even stronger. 
                    It was during this time that I started exploring free online courses in Web Development. 
                    As I delved into the fundamentals of coding and witnessed the art of website creation, 
                    I knew deep within that this was the trajectory of my career.
                </p> <br></br>

                <div className='left-0 '>
               
              <img src={working} alt="working" className="working"/>
           </div><br></br>
                <small className='italic'>"We are continually faced by great opportunities brilliantly disguised as insoluble problems."  - Lee Iacocca</small>
                <br></br>

                <p> For a while, I had been patiently waiting for the perfect moment to return to school. 
                    Juggling a full-time job, it never seemed like the right time to pursue further education. 
                    However, I mustered the courage and took a leap of faith by enrolling in a Web Development program. 
                    Initially, it was challenging to balance work and school, and there were moments when I contemplated giving up. 
                    Yet, as I acquired more knowledge and gained hands-on experience in creating websites, my determination surged.
                </p> <br></br>

                <small className='italic'>"As engineers, we were going to be in a position to change the world - not just study it."  - Henry Petroski</small>

                <br></br>
                <p>Upon graduating, I received a significant promotion at my workplace, transitioning into the role of a Web Developer. 
                    I owe a debt of gratitude to those who supported me, cheering me on and believing in my abilities. 
                    I take immense pride in my decision to take that leap of faith and trust in my own capabilities. 
                    As I continue to evolve and expand my knowledge, my ultimate aspiration is to contribute to the creation of extraordinary 
                    things in this world. 
                </p> <hr></hr>
                <h6>By: Rose L.</h6>

                <div className="parent-of-goBack">
                <button type="button" className='goBack' onClick={(e) => {
                    e.preventDefault(); navigate('/personal'); }}>
                    Go Back 
                </button>
            </div>
            </div>
        </div>
    );
};

export default Blog;