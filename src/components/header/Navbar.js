import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Navbar.Brand href="#home">
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              {/* Centered item */}
              <Navbar.Collapse className="justify-content-center">
                <Nav>
                  <Nav.Link href="#about">Center Item</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              {/* Right-aligned items */}
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}
