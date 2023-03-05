import React from 'react'
import socialMedia from './img/socialmedia.png'
function Sm30days() {
    return (
        <div className="blog-post-intro">
            
            <h2>Social Media Detox</h2>
            {/* <hr id='hr30Days'></hr> */}
            <div className='imgWrapperthree'>
                <hr></hr>
              <img src={socialMedia} alt="Social" className="img-fluidthree"/>
           </div>

            
            <div className="wrapper">
            <h5 className="text-uppercase">How it felt being off social media for 30 days</h5>
            <hr></hr>
                <p>What did I notice on my first few days without my social media apps?! Well, let me tell you something, time went by slower then expected. 
                   There wasn't an app distracting me. I didn't have my apps filling in those gaps of my day, consuming my time.
                   I felt a sense of emptiness and a sense of urgency to check Twitter, Instagram, Facebook, LinkedIn and/or TikTok as if I was
                   missing out on something important.</p>
                   <br></br>
                    <p>So, what did I do to stop it? To stop the feeling of emptiness and urgency? The way I accomplished it was by replacing my social media apps 
                   with more productive ones. So, when my funny brain would say, Oh! I need to click there! On that spot, where I alway click and entertainment magically pops up! 
                   It would instead be clicking on a painting app or a book app. I tricked my funny brain into working for entertainment.</p>
                   <br></br>
                <p> By doing so, it helped my auto-drive brain alleviate the empty feeling of not having 
                    my usual social media apps there and distract it from the "urgency".
                    Now, my attention was going on things that I had procrastinated on. For example, I read books that were on my waiting list 
                    and some that were collecting dust on my bookshelf. I listen to audio books I left half way and 
                    I picked up on a new class. As well as, I was able to really focus on my coding projects.
                </p> <br></br>
                <p> The less time I spent on social media the more productive and accomplished I felt. I wasn't pulled into a hundred 
                different distracting directions with every notification calling my attention. I didn't feel over extended. 
                I didn't have to see or hear bad news every minute of the day. I didn't have to pressure myself 
                to share parts of my day. I wasn't being criticized or attacked for sharing my thoughts. Time was about me 
                and about feeling centered.
                </p> <br></br>
                <p> I had time to focus and really enjoy my time. To really enjoy that delicious cup of coffee while reading my book in the morning. 
                It was about me and preserving my energy. Going forward, I will be more prudent 
                with my time and how I give out my energy. 
                </p> <hr></hr>
                <h6>By: Rose L.</h6>
            </div>
        </div>
    );
};

export default Sm30days;