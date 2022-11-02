import React from 'react'

function Home() {
  // function handleClick() { 
  //   let randomNum = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNum);
  //   let userInput = prompt('type a number'); 
  //   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  // }
  return (
    <div className="blog-post-intro">
    {/* <h2>Why I love front-end web development</h2> */}
    <h2>Welcome!
    <hr></hr></h2>
    <div className='codehappy'>
     
    </div>

    <div className="wrapper">
        
        <p className="text-center">I created this React App to share my experience and knowledge with others.
        </p>
        <p className="text-center"> I have read many books and gather all the helpful tips so you don't have to.
        </p>
        <p className="text-center"> Enjoy!
        </p>
        
        
    </div>
</div>

    // <div>
    //   <button onClick={handleClick}>
    //     Click Me
    //   </button>
    // </div>
  );
}

export default Home