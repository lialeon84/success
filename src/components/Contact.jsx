import React from 'react'

import { useState } from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;



// export default function RegisterForm() { 
//     const [form, setForm] = useState({ 
//       firstName: '', 
//       lastName: '', 
//       email: '', 
//     }); 
  
//     return ( 
//       <> 
//         <label> 
//           First name: 
//           <input 
//             value={form.firstName} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 firstName: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <label> 
//           Last name: 
//           <input 
//             value={form.lastName} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 lastName: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <label> 
//           Email: 
//           <input 
//             value={form.email} 
//             onChange={e => { 
//               setForm({ 
//                 ...form, 
//                 email: e.target.value 
//               }); 
//             }} 
//           /> 
//         </label> 
//         <p> 
//           {form.firstName}{' '} 
//           {form.lastName}{' '} 
//           {form.email}
//         </p> 
//       </> 
//     ); 
//   } 


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