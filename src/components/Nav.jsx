import About from './About';
import Home from './Home';
import Sm30days from './Sm30days';
import Contact from './Contact';
import Impostor from './Impostor';
import Learning from './Learning';
import ReactPage from './ReactPage';
import Gadgets from './Gadgets';
import JSFunctions from './JSFunctions';
import Game from './Game';
import Blog from './Blog';
import AmazonSub from './AmazonSubs';
import Gallery from './Gallery';
import Personal from './PersonalGrowth';
import DevJourney from './DevJourney';
import DevGuide from './DevGuide';
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { ReactComponent as Logo } from "./img/logo4.svg";
import { useNavigate } from 'react-router-dom';


const Navig = () => {
const navigate = useNavigate();

const handleLinkClickHome = (e) => {
  e.preventDefault();
  navigate('/');
}
// const handleLinkClickImpostor = (e) => {
//   e.preventDefault();
//   navigate('/impostor');
// }
// const handleLinkClickReactt = (e) => {
//   e.preventDefault();
//   navigate('/reactpage');
// }
const handleLinkClickGadgets = (e) => {
  e.preventDefault();
  navigate('/gadgets');
}
// const handleLinkClickLearn = (e) => {
//   e.preventDefault();
//   navigate('/learning');
// }
const handleLinkClickAbout = (e) => {
  e.preventDefault();
  navigate('/about');
}
// const handleLinkClickJSFunctions = (e) => {
//   e.preventDefault();
//   navigate('/js');
// }
// const handleLinkClickGame = (e) => {
//   e.preventDefault();
//   navigate('/game');
// }
const handleLinkClickContact = (e) => {
  e.preventDefault();
  navigate('/contact');
}
// const handleLinkClickBlog = (e) => {
//   e.preventDefault();
//   navigate('/blog');
// }
// const handleLinkClickDetox = (e) => {
//   e.preventDefault();
//   navigate('/detox');
// }

// const handleLinkClickAmazon = (e) => {
//   e.preventDefault();
//   navigate('/amazon');
// }

const handleLinkClickGallery = (e) => {
  e.preventDefault();
  navigate('/gallery');
}

const handleLinkClickPersonal = (e) => {
  e.preventDefault();
  navigate('/personal');
}


const handleLinkClickProjects = (e) => {
  e.preventDefault();
  navigate('/projects');
}

const handleLinkClickDev = (e) => {
  e.preventDefault();
  navigate('/dev');
}
 return(
    <>
    <Navbar sticky='top' collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Container>
      <Navbar.Brand id="navLinks" href="/" >
        {/* <div className='coderChic'>
      <img src={process.env.PUBLIC_URL + './IMG_1978.PNG'} alt="Image" className='logopic'></img> </div> */}
      {/* <Logo
          alt=""
          width="30"
          height="30"
          border-radius="50%!important"
          className="d-inline-block align-top"
        /> */}
       Coder Chic
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link id="navLinks" href="/" onClick={handleLinkClickHome}>Home</Nav.Link>
        <Nav.Link id="navLinks" href="/gallery" onClick={handleLinkClickGallery}>Gallery</Nav.Link>
        {/* <Nav.Link id="navLinks" href="/js" onClick={handleLinkClickJSFunctions}>JS</Nav.Link> */}
        <Nav.Link id="navLinks" href="/projects" onClick={handleLinkClickProjects}>Portfolio</Nav.Link>
        {/* <Nav.Link id="navLinks" href="/#"></Nav.Link> */}
        {/* <Nav.Link id="navLinks" href="/reactpage" onClick={handleLinkClickReactt}>React</Nav.Link> */}
        <Nav.Link id="navLinks" href="/dev" onClick={handleLinkClickDev}>Dev</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item className="dropDown" href="/gadgets" onClick={handleLinkClickGadgets}>Gadgets</NavDropdown.Item>
       
        {/* <NavDropdown.Item className="dropDown" href="/amazon" onClick={handleLinkClickAmazon}>Amazon Chart</NavDropdown.Item> */}
        <NavDropdown.Item className="dropDown" href="/personal" onClick={handleLinkClickPersonal}>Personal Growth</NavDropdown.Item>
        {/* <NavDropdown.Item className="dropDown" href="/learning" onClick={handleLinkClickLearn}>Cognitive Learning</NavDropdown.Item> */}
        {/* <NavDropdown.Item className="dropDown" href="/impostor" onClick={handleLinkClickImpostor}>Impostor</NavDropdown.Item> */}
        {/* <NavDropdown.Item className="dropDown" href="/detox" onClick={handleLinkClickDetox}>30Days</NavDropdown.Item> */}
        {/* <NavDropdown.Item className="dropDown" href="/blog" onClick={handleLinkClickBlog}>My Journey</NavDropdown.Item> */}
        <NavDropdown.Item className="dropDown" href="/about" onClick={handleLinkClickAbout}>About Me</NavDropdown.Item>
        <NavDropdown.Item className="dropDown" href="/contact" onClick={handleLinkClickContact}>Contact</NavDropdown.Item>
        {/* <NavDropdown.Item href="/contact">
        Contact 
        </NavDropdown.Item>
        <NavDropdown.Item href="/#something">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/#action">
          Separated link
        </NavDropdown.Item> */}
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/reactpage" element={<ReactPage/>} />
    <Route path="/impostor" element={<Impostor/>} />
    <Route path="/learning" element={<Learning/>} />
    <Route path="/gadgets" element={<Gadgets/>} />
    <Route path="/js" element={<JSFunctions/>} />
    <Route path="/game" element={<Game/>} />
    <Route path="/amazon" element={<AmazonSub/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/detox" element={<Sm30days/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/personal" element={<Personal/>} />
    <Route path="/projects" element={<DevJourney/>} />
    <Route path="/dev" element={<DevGuide/>} />
  </Routes>
  
  </>
  )
}

export default Navig;