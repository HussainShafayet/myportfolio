import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(props) {
  const { refData, scrollToSection} = props;
  return (
    <>
        <Navbar expand="lg" className="bg-body-secondary sticky-top">
        <Navbar.Brand href="/">
            <img
              alt="logo"
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Portfolio
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              {/* Left-aligned items */}
              <Navbar.Collapse className="justify-content-start">
                <Nav>
                  {/*<Nav.Link href='#home' onClick={() => scrollToSection(refData.homeRef)}>Home</Nav.Link>
                  <Nav.Link href='#about' onClick={() => scrollToSection(refData.aboutRef)}>About</Nav.Link>
                  <Nav.Link href='#resume' onClick={() => scrollToSection(refData.resumeRef)}>Resume</Nav.Link>*/}
                </Nav>
              </Navbar.Collapse>

              {/* Centered item */}
              {/*<Navbar.Collapse className="justify-content-center">
                <Nav>
                  <Nav.Link href="#about">
                    <img src={`${process.env.PUBLIC_URL}/shafayet_s_Resume.pdf`} />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>*/}

              {/* Right-aligned items */}
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                <Nav.Link href='#home' onClick={() => scrollToSection(refData.homeRef)}>Home</Nav.Link>
                  <Nav.Link href='#about' onClick={() => scrollToSection(refData.aboutRef)}>About</Nav.Link>
                  <Nav.Link href='#resume' onClick={() => scrollToSection(refData.resumeRef)}>Resume</Nav.Link>
                <Nav.Link href='#projects' onClick={() => scrollToSection(refData.projectsRef)}>Projects</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href='#contact' onClick={() => scrollToSection(refData.contactRef)}>Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}
