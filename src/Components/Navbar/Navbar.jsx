import React from 'react';
import {Link}from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css'

function Header() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Donor App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contributors">Contributors</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                <Nav className='navs' >
                    <Link to="/login"><Button variant="danger">Login</Button></Link>
                    <Link to="/signup"><Button variant="danger">SignUp</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;