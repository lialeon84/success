
import Footer from './components/Footer';
import Navi from './components/Nav';
// import Header from './components/Header';
import * as React from "react";
import './App.css';
import './gadgets.css';
import Plausible from 'plausible-tracker'



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

     // const { trackPageview } = Plausible({
     //      // Track localhost by default
     //      trackLocalhost: true,
     //    })
        
     //    // Override it on this call and also set a custom url
     //    trackPageview({
     //      // trackLocalhost: false,
     //      url: "https://coderchic.com"
     //    })
     return (
 
    <div className='App'>
       
         
         <Navi />
         <Footer />
      </div>
     
      
    );

    
}

 export default App;


 