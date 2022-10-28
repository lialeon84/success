import About from './About';
import Home from './Home';
import Sm30days from './Sm30days';
import Contact from './Contact';
import Impostor from './Impostor';
import Learning from './Learning';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Navig = () =>
    <>
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Container>
      <Navbar.Brand href="/" className='coderChic'>Coder Chic</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/sm30days">30Days</Nav.Link>
        <Nav.Link href="/impostor">Impostor</Nav.Link>
        <Nav.Link href="/learning">Learning</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/contact">
        Contact
        </NavDropdown.Item>
        <NavDropdown.Item href="/#">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sm30days" element={<Sm30days />} />
    <Route path="/impostor" element={<Impostor />} />
    <Route path="/learning" element={<Learning />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    
  </Routes>
  
  </>


export default Navig;