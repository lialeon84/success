import React from 'react'
import impostorPic from './img/imposter.png'
function Impostor() {
     
    return (
        <div className="blog-post-intro">
           <h2>Love Thyself</h2>
           {/* <hr id='impostorHr'></hr> */}
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={impostorPic} alt="Myself" className="img-fluidthree"/>
           </div>

            <div className="wrapper">
            <h5 className="text-uppercase">How to believe in yourself</h5>
            <hr></hr> 
                <p>In today's society there's a lot of pressure to achieve success and that can drive us to over do it. 
                   Usually because of that pressure, we may blur healthy boundaries. We pressure and overwork ourselves 
                   trying to get things done fast which can lead to burnout and forgetfulness. 
                </p> <br></br>
                <p> As we climb the ladder of success it will do us good to work with managers, agents, family, friends 
                    or even an assistant who can say No or Yes on our behalf. People who can help us set boundaries that 
                    are required to succeed. Even when we go through periods where we simply feel lost about 
                    our professional direction. 
                </p> <br></br>
                <p> How can this help you fight impostor syndrome? By surrounding yourself with supporters who 
                    bolster your confidence, it can help you stay on purpose-driven even when you want to run away or sabotage
                    your well-deserved success. What will truly help us is when we stop comparing ourselves to others.
                    When we stop seeking validation that we are good enough for the career that we want and we decide we're
                    in charge of our own validation.
                </p><br></br>
                <p> Stop expecting perfection from yourself when you're learning anything new. Comparing ourselves is what causes 
                    impostor syndrome. Nothing good comes from comparing ourselves and despairing on those differences. Next time
                    you start comparing yourself, stop what you're doing, take a deep breathe and say, "I am good enough. I am good enough where 
                    I'm at and I will get better. I will get there soon enough."
                </p> <br></br> 
                <p>Nothing is stopping us from reaching the level of success we want. We stop ourselves by believing things 
                    that aren't true. What we tell ourselves over and over again. Am I smart enough? Am I good enough? 
                    We set all of these limitations in our minds. Social media does a good part of ripping us apart and making us 
                    feel worse. Dissecting us piece by piece making us feel less worthy of what we want. Don't let anything
                    get into your head to make you stop believing in yourself. Remember to say to yourself, "I am good enough."
                    Never stop believing in yourself because your future self will thank you. 
                </p><hr></hr> 
                 <h6>By: Rose L.</h6>
            </div>
        </div>
    );
};

export default Impostor;