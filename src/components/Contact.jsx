import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import '../contact.css';
import ReCAPTCHA from "react-google-recaptcha";


const NameForm = () => {
  // useEffect(() => {
  //    //Set SameSite=Lax
  //   document.cookie = 'cookieName=cookieValue; SameSite=Lax';
  // }, []);

  var SERVICE_ID = "service_90q3gkl"
  // const recaptchaValue = recaptchaRef.current.getValue();
  var TEMPLATE_ID = "template_y8p5ije"
  // recaptchaValue.current.reset();

    // //this.props.onSubmit(recaptchaValue);
    // //const token = captchaRef.current.getValue();
  var USER_ID = "FBk0m5nZQEqyTCJjS"

  //const recaptchaRef = React.createRef();
  const captchaRef = useRef(null);
  //const token = captchaRef.current.getValue();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    
    //const token = captchaRef.current.getValue();
        captchaRef.current.reset();
       

    emailjs.sendForm(

      SERVICE_ID , 
      TEMPLATE_ID , 
      e.target, 
      USER_ID
      )

      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title:'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <>
     <h2 className='text-shadow-fuchsia-600 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00DBDE] to-[#FC00FF]'>
                Contact Me</h2>
           
               

    <div className='email'>
      <Form onSubmit={handleOnSubmit} >
     
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
         <ReCAPTCHA
        className='g-recaptcha'
       
        sitekey="6Ld2zQAnAAAAANMELJGUnkP8n3xmM_IBJy6cBSX1"
        ref={captchaRef}
        
      />
        <Button type='submit' color="purple">Submit</Button>
       
      </Form>
    </div>
      <br></br>
      <div className="mb-64">

      </div>
      </>
  );
  }

export default NameForm;

//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           Last Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <label>
//           Email:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

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