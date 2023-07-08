import React from 'react'
import socialMedia from './img/socialmedia.png'
function Sm30days() {
    return (
        <div className="blog-post-intro">
            
            <h2>Embarking on a Social Media Detox</h2>
            {/* <hr id='hr30Days'></hr> */}
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={socialMedia} alt="Social" className="img-fluidthree"/>
           </div>

            
            <div className="wrapper">
            <h5 className="text-uppercase">Experiencing 30 Days Without Social Media: Reflections and Insights</h5>
            <hr></hr>
                <p>Discovering life without my social media apps in those initial days was an eye-opening experience. 
                    Surprisingly, time seemed to pass more slowly without the constant distraction of those apps. 
                    The void created by their absence left me with a sense of emptiness and an urgency to check platforms like Twitter, 
                    Instagram, Facebook, LinkedIn, and TikTok, fearing that I might miss out on something significant.</p>
                   <br></br>
                    <p>How did I combat that feeling as if I was missing out? The solution lay in replacing my social media apps 
                        with more productive alternatives. Whenever my impulse-driven mind craved the familiar entertainment, 
                        I redirected it towards engaging painting or book apps. By cleverly tricking my own mind, I could obtain 
                        entertainment while focusing on more enriching activities.</p>
                   <br></br>
                <p> This strategy helped my automatic response system ease the emptiness I felt without my usual social media apps 
                    and diverted it away from the perpetual "urgency." Consequently, my attention was redirected towards tasks I had 
                    procrastinated on. I finally had the opportunity to dive into the books that had long awaited my attention, 
                    including those collecting dust on my bookshelf. I resumed half-finished audio books and even embarked on new classes. 
                    Additionally, my coding projects received my undivided focus.
                </p> <br></br>
                <p> As I reduced my time spent on social media, I experienced a boost in productivity and a profound sense of accomplishment. 
                    Freed from the constant pull of notifications demanding my attention in a hundred different directions, I no longer felt 
                    overwhelmed. I could shield myself from the incessant flow of negative news. The pressure to share every moment of my day 
                    dissipated, as did the fear of criticism or attack for expressing my thoughts. Time became about my personal well-being and 
                    finding inner balance.
                </p> <br></br>
                <p> I rediscovered the joy of focusing on activities and savoring moments. I could truly relish that delightful cup 
                    of morning coffee while immersing myself in a captivating book. It became a time for self-care and preserving my 
                    energy. Going forward, I am determined to be more mindful of how I allocate my time and distribute my energy, 
                    ensuring that I prioritize activities that align with my well-being and personal growth. 
                </p> <hr></hr>
                <h6>By: Rose L.</h6>
            </div>
        </div>
    );
};

export default Sm30days;