import About from './About';
import Home from './Home';
import Sm30days from './Sm30days';
import Contact from './Contact';
import Impostor from './Impostor';
import Learning from './Learning';
import ReactPage from './ReactPage';
import Gadgets from './Gadgets';

import React from 'react'
import { Routes, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { ReactComponent as Logo } from "./img/logo4.svg";



const Navig = () =>

    <>
    <Navbar sticky='top' collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Container>
      <Navbar.Brand id="navLinks" href="/" >
        {/* <div className='coderChic'>
      <img src={process.env.PUBLIC_URL + './IMG_1980.PNG'} alt="Image" className='logopic'></img> </div> */}
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
        <Nav.Link id="navLinks" href="/">Home</Nav.Link>
        {/* <Nav.Link href="/sm30days">30Days</Nav.Link> */}
        <Nav.Link id="navLinks" href="/impostor">Impostor</Nav.Link>
        {/* <Nav.Link id="navLinks" href="/#"></Nav.Link> */}
        <Nav.Link id="navLinks" href="/reactpage">React</Nav.Link>
        <Nav.Link id="navLinks" href="/gadgets">Gadgets</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item id="dropDown" href="/learning">Learn</NavDropdown.Item>
        {/* <NavDropdown.Item id="dropDown" href="/sm30days">Detox</NavDropdown.Item> */}
        <NavDropdown.Item id="dropDown" href="/about">About</NavDropdown.Item>
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
    {/* <Route path="/sm30days" element={<Sm30days/>} /> */}
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    
  </Routes>
  
  </>


export default Navig;