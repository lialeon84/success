import React from 'react'
import reactpic from './img/react.png'
function ReactPage() {
    return (
        <div className="blog-post-intro">
            
            <h2>How to get Started with React</h2>
            
             <div className='imgWrapperthree '>
                    <hr></hr> 
                    <img src={reactpic} alt="React" className="img-fluidthree rounded"/> 
                   
            </div>
           
            
            <div className="wrapper">
            <h5 className="text-uppercase">Here are the first few steps to get started</h5>
            <hr></hr>
            
            <p>It's very important to note that you should already have some basic knowledge of HTML, CSS and JavaScript.
                 If you don't I would suggest to learn those first before starting this project.
               </p>

                <p>Before starting your first React project make sure you have Visual Studio Code install on your computer. If you don't have it install yet please 
                    visit the link provided to install VS Code. <a href={"https://code.visualstudio.com/"} target="_blank" rel="noreferrer">Download VS Code</a>
                </p> 
              
                <p>Once you have VS Code installed you can start with React. </p>

                <p>In your VS Code open your terminal. In the terminal we're going to create the folder you're going to create your React app in.
                    Before creating the folder make sure you're in the correct directory. For example, it should have your computer 
                    name, whatever it is that you've named your computer. For example, for Mac users it should be something like this:</p>
                    
                    <pre rel="JavaScript" data-line> 
                      <code markup="tt">
                       userComputerName-MacBook-Pro:~ userComputerName$
                      </code>
                  </pre> 
                        
                  <p> in your terminal. It's very important you have a dollar sign at the end. It should be set 
                        to your computer name when you bring your terminal up but you may want to check before entering a command. </p>
                
                <p>If you already have a project folder you can skip this step.</p>

                <p>Once you see your computer name you can create your folder for your React project. Here in this folder you will also put all of 
                    your coding projects as well, not just React. You can name it whatever 
                    you want just make sure it isn't a name you'll regret later. For example, I named mine,
                    coding-projects. You can name your folder the same as mine if you like. In your terminal type the following command:</p>

                    <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        mkdir yourFolderNameHere
                     </code>
                    </pre> 

                    <p>and press enter. Then cd into your folder by typing in the following command in your terminal:</p>

                    <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        cd yourFolderNameHere
                     </code>
                    </pre> 
                    
                    <p>and it will switch you into your fold. Now that you're in your project folder you can create your 
                    React project by following the next few steps. 
                    </p>

                    <p>In your terminal and you should also be already be in your project folder once you've cd into it,
                         you're going to create a new folder that will only be for that React project. In your terminal type the
                         following command:</p>

                        <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        npx create-react-app nameYourReactProjectHere
                     </code>
                    </pre> 

                    <p>In the (nameYourReactProjectHere) you can name your React project whatever you like (for example, I named mine coderchic) 
                         and than press enter to create. This might take a few minutes to create as it is loading all of the React files. 
                         Once it has finished downloading you can cd into your React project where you'll be able to see all of the folders and files.
                    </p>

                    <p>Let's cd into your React project. In your terminal type the following command:</p>

                    <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        cd yourReactProjectNameHere
                     </code>
                    </pre>

                    <p>Once you have cd into your React folder you'll be able to see all of the folders that were 
                    created and start modifying your app.
                     </p>

                    <p>To start your React app simply type the following command in your terminal:</p>

                    <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                        npm start
                    </code>
                    </pre> 

                    <p>It will open a web browser with the React logo. </p>

                    <p>To quit your React app simply click in your terminal with the following:</p>

                    <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                        control c
                    </code>
                    </pre>

                    <p> It will stop your React app and you can close the browser. To restart your React app use the 
                    same command we used earlier above to start it. To save changes to your files, on your keyboard press: </p>

                    <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                        control s
                    </code>
                    </pre> 
                    
                    {/* <p>in your VS Code and you're all set. These are a few of the basic steps to start your first React project. To learn more 
                        check out my YouTube Channel <a href={"https://www.youtube.com/@coderchic/featured"} target="_blank">CodeChic</a>
                    </p>  */}
                    <hr></hr>
            </div>
        </div>
    
    );
};

export default ReactPage;