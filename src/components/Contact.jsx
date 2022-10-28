import React from 'react'

import { useState } from 'react';


export default function RegisterForm() { 
    const [form, setForm] = useState({ 
      firstName: '', 
      lastName: '', 
      email: '', 
    }); 
  
    return ( 
      <> 
        <label> 
          First name: 
          <input 
            value={form.firstName} 
            onChange={e => { 
              setForm({ 
                ...form, 
                firstName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <label> 
          Last name: 
          <input 
            value={form.lastName} 
            onChange={e => { 
              setForm({ 
                ...form, 
                lastName: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <label> 
          Email: 
          <input 
            value={form.email} 
            onChange={e => { 
              setForm({ 
                ...form, 
                email: e.target.value 
              }); 
            }} 
          /> 
        </label> 
        <p> 
          {form.firstName}{' '} 
          {form.lastName}{' '} 
          {form.email}
        </p> 
      </> 
    ); 
  } 


// export default function InputComponent() { 
//   const [inputText, setText] = useState('hello'); 

//   function handleChange(e) { 
//     setText(e.target.value); 
//   } 

//   return ( 
//     <> 
//       <input value={inputText} onChange={handleChange} /> 
//       <p>You typed: {inputText}</p> 
//       <button onClick={() => setText('hello')}> 
//         Reset 
//       </button> 
//     </> 
//   ); 
// } 

// function Intro1() {
//         return (
//             <div className="blog-post-intro">
//                 <h2>I've become a React developer!</h2>
//                 <div>
//                     <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
//                     <p className="link">Read more...</p>
//                 </div>
//             </div>
//         );
//     };
    
//     export default Intro1;