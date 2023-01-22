import React from 'react'
import brainPic from './img/brain.png'
function Learning() {
   
    return (
        <div className="blog-post-intro">
            {/* <h2>Why I love front-end web development</h2> */}
            <h2>The Way The Brain Learns</h2>
            {/* <hr id='learningHr'></hr> */}
           
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={brainPic} alt="Brain" className="img-fluidthree"/>
           </div>
           
            <div className="wrapper">
            
            <h5 className="text-uppercase">What to do when you're stuck in overthinking</h5>
             <hr></hr>
                <p>"One of the things I learn from this article is, when you're stuck in overthinking and what to do with it.
                    He called it Focused and Diffuse thinking. You would focus for 25mins and then do some kind of 
                    reward system. One that will make you go into diffuse thinking. For example, reward yourself with a
                    coffee break, take a walk, play a simple game, anything to take the mind off focus mode. Zooming 
                    in and out of a problem can give you a bigger perspective basically."
                </p> <br></br>
                
                <p>"When learning something new take day breaks, for example, the same way you would do when you have 
                    an exercise routine. Lets say you would study Monday's, Wednesday's and Friday's and the other
                    days are for resting and doing other things. If you read or study before going to bed it will help 
                    you dream about it and if you say you want to dream about it you could dream of what you have 
                    read or studied."
                </p> <br></br>

                <p>"When learning something boring ask questions about what it is you're learning. Which in turn will activate 
                    interest. You learn more by active engagement then by passive listening. Exercising will help create new 
                    neuron connections that helps memory and keeps the mind healthy. The brain starts generating new ideas in 
                    diffuse thinking, to activate diffuse thinking simply take a walk. Make sure to take your phone or notepad
                    with you to write down your ideas."
                </p> <br></br>

                <p>"To avoid getting burnout when you want to study or work for long periods of time is to take breaks periodically. 
                    If you're going to study or work for six days straight make sure to take the seventh day off. Repeat this process 
                    for four weeks and then take 5 days off. If you don't take any breaks for three months straight this is when
                    you will start to experience burnout, your brain will refuse new memories and you will have a harder time 
                    focusing."
                </p><hr></hr>
                <h6>By: Dr. Terrence Sejnowski</h6>
                <a href={"https://acrosstraducciones.com/2017/09/06/learning-how-to-learn/"} target="_blank" id="link">Click here to read more about it!</a>
            </div>
        </div>
    );
};

export default Learning;