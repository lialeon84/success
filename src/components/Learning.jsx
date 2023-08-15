import React from 'react'
import brainPic from './img/brain.png'
import { useNavigate } from 'react-router-dom';


function Learning() {
    const navigate = useNavigate();

    return (
        <div className="blog-post-intro">
            {/* <h2>Why I love front-end web development</h2> */}
            <h2>Decoding the Brain's Learning Process</h2>
            {/* <hr id='learningHr'></hr> */}
           
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={brainPic} alt="Brain" className="img-fluidthree rounded"/>
           </div>
           
            <div className="wrapper">
            
            <h5 className="text-uppercase">Understanding How We Absorb and Retain Information</h5>
             <hr></hr>
                <p>In this insightful article (Desiré, 2017), one valuable lesson I learned is how to deal with overthinking effectively. 
                    The author introduces the concept of "Focused and Diffuse Thinking" as a practical approach. 
                    The idea is to dedicate 25 minutes of focused attention on a task, followed by a rewarding activity that 
                    encourages diffuse thinking. By shifting your mind away from intense focus, you gain a broader perspective 
                    on the problem at hand.
                </p> <br></br>
                
                <p>To enhance the learning process, it is advisable to incorporate day breaks, similar to having a structured exercise routine. 
                    For instance, you can designate specific study days like Mondays, Wednesdays, and Fridays, while using the other days for 
                    rest and other activities. Engaging in reading or studying before bedtime can help stimulate dreams related to the subject 
                    matter. In fact, you can even set the intention to dream about what you have learned, allowing your subconscious mind to 
                    process and reinforce the knowledge.
                </p> <br></br>

                <p>When faced with a mundane or uninteresting topic, a helpful approach is to ask questions and actively engage with the material. 
                    This practice triggers curiosity and activates your interest, facilitating better learning outcomes compared to passive 
                    listening alone. Regular exercise plays a crucial role in creating new neural connections, benefiting memory retention and 
                    overall mental health. Notably, diffuse thinking, which stimulates the generation of fresh ideas, can be effortlessly 
                    induced by taking a leisurely walk. It's essential to carry a phone or notepad during these walks to jot down any inspiring 
                    thoughts that may arise.
                </p> <br></br>

                <p>To prevent burnout during extended study or work sessions, it's crucial to incorporate periodic breaks. 
                    If you plan to study or work continuously for six days, be sure to allocate the seventh day as a complete break. 
                    Repeat this cycle for four weeks and then grant yourself five consecutive days off. Failure to take regular breaks 
                    for three months straight can lead to burnout, causing your brain to resist forming new memories and impairing your 
                    ability to focus effectively.
                </p>
                <p>By applying these strategies and understanding the importance of balancing focus and diffuse thinking, 
                    incorporating breaks, and maintaining an active and engaged learning approach, you can optimize your learning 
                    experience and safeguard your mental well-being.
                </p>
                <hr></hr>
                <h6>Referencing: Dr. Terrence Sejnowski <br></br>
                <a href={"https://acrosstraducciones.com/2017/09/06/learning-how-to-learn/"} target="_blank" id="link" rel="noreferrer">Click here to read more about it!</a>
                </h6>

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

export default Learning;

//  <p>"One of the things I learn from this article is, when you're stuck in overthinking and what to do with it.
//                     He called it Focused and Diffuse thinking. You would focus for 25mins and then do some kind of 
//                     reward system. One that will make you go into diffuse thinking. For example, reward yourself with a
//                     coffee break, take a walk, play a simple game, anything to take the mind off focus mode. Zooming 
//                     in and out of a problem can give you a bigger perspective basically."
//                 </p> <br></br>
                
//                 <p>"When learning something new take day breaks, for example, the same way you would do when you have 
//                     an exercise routine. Lets say you would study Monday's, Wednesday's and Friday's and the other
//                     days are for resting and doing other things. If you read or study before going to bed it will help 
//                     you dream about it and if you say you want to dream about it you could dream of what you have 
//                     read or studied."
//                 </p> <br></br>

//                 <p>"When learning something boring ask questions about what it is you're learning. Which in turn will activate 
//                     interest. You learn more by active engagement then by passive listening. Exercising will help create new 
//                     neuron connections that helps memory and keeps the mind healthy. The brain starts generating new ideas in 
//                     diffuse thinking, to activate diffuse thinking simply take a walk. Make sure to take your phone or notepad
//                     with you to write down your ideas."
//                 </p> <br></br>

//                 <p>"To avoid getting burnout when you want to study or work for long periods of time is to take breaks periodically. 
//                     If you're going to study or work for six days straight make sure to take the seventh day off. Repeat this process 
//                     for four weeks and then take 5 days off. If you don't take any breaks for three months straight this is when
//                     you will start to experience burnout, your brain will refuse new memories and you will have a harder time 
//                     focusing." 