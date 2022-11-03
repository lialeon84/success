import React from 'react'
import socialMedia from './img/alexander-shatov-mr4JG4SYOF8-unsplash.jpg'
function Sm30days() {
    return (
        <div className="blog-post-intro">
            
            <h2>Things I noticed about myself without social media for 30 days</h2>
            {/* <hr></hr> */}
            <div className='imgWrappertwo'>
              <img src={socialMedia} alt="Myself" className="img-fluidtwo"/>
           </div>

            
            <div className="wrapper">
               
                <p>What I noticed on the first few days without social media was that time went by slower. 
                   I had nothing to distract me from. There wasn't an app filling in those gaps of every minute of my day.
                   There was a sense of urgency to check Twitter, Instagram, Facebook, LinkedIn and TikTok. As if I was
                   missing out on something important. What I did to stop that feeling was by replacing those apps 
                   with more productive apps. When my mind would automatically go to click where Facebook app was at it 
                   would be a painting app or a book app and so on. 
                </p>
                <p> Doing so helped the auto click to the social media app and alleviated the empty feeling of not having those apps there.
                    Now, my attention were on other things that I had procrastinated on. I read books that I've been wanting to read 
                    and some that were collecting dust on my bookshelf. I listen to my audio books I left half way. 
                    I picked up a new class and focus more on my React project.
                </p>
                <p> The less time I spent on social media the more productive I felt. I didn't feel pulled into a 100 
                different directions with everything calling my attention. I didn't feel overly extended. 
                I didn't have to see or hear nerve racking news every minute of the day. I didn't feel pressured 
                to share parts of myself. I wasn't criticized or attacked for sharing my thoughts. Time was about me 
                and about feeling centered.
                </p>
                <p> I had time to focus and really enjoy my time. To enjoy that cup of coffee without reading any bad news. 
                It really was about me and about preserving my energy. I will be more prudent 
                with my time and how I give out my energy going forward.
                </p>
                <h6>By: Rose V.</h6>
            </div>
        </div>
    );
};

export default Sm30days;