import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import Logo from "../assets/logo-color.svg";

const NavBar = () => {
    return (
        <>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">
              <img
                  src={Logo}
                  height="40"
                  className="d-inline-block align-top"
                  alt="Empyrean Solutions logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
    }

export default NavBar