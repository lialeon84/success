

import React, { useState } from 'react';
import '../game.css';
import ChatBot from "react-simple-chatbot";
import { steps } from "../gameLogic";
// import $ from 'jquery';

export default function Game() {
    const [showChatBot, setShowChatBot] = useState(false);
   


  
    const handleClick = (e) => {
        e.preventDefault();
        setShowChatBot(!showChatBot);
        
      };
    
    
    
       

       

   
    return (
        <div className="bg-black">
          
            <h2 className='text-shadow-fuchsia-600 shadow-md uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] '>
                Jailbreak</h2>
           
                <hr class="border-25 h-1 bg-fuchsia-600  border-fuchsia-600 glow-fuchsia-600 rounded-full glow" />


           <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
         
          <div className="mt-8 space-y-6">
            {showChatBot && (
            <div className="rounded-md shadow-sm -space-y-px">
            
                <ChatBot steps={steps}  className="rounded relative block
                    px-3 py-2 h-120 w-auto bg-gray-900 text-gray-300 
                placeholder-gray-500 rounded-t-md overflow-auto
                shadow-lg shadow-indigo-500/50 border-2 border-indigo-900 " />
              
            
            </div>
            )}
              <br></br>
             
            

            <div>
            
            <button onClick={handleClick} type="submit" className="rounded-xl bg-gradient-to-br from-[#00DBDE] to-[#FC00FF] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FC00FF]/50 float-right mb-80">
            Start Game
            </button>
              
            </div>
          </div>
        </div>
      </div>
           

        
         
           
 </div>
    
    );
};

