import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';
import React from "react"
import Logo from "../assets/logo-color.svg";

const NavBar = () => {
    return (
        <>
          <Navbar className={styles.NavBar}>
            <Container>
              <Navbar.Brand>
              <img
                  src={Logo}
                  height="50"
                  alt="Empyrean Solutions logo"
                  className="mx-auto"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
    }

export default NavBar
