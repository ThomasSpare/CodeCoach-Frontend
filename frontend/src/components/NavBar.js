import React from "react";
import logo from "../assets/CodeCoachLogo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import SignUpForm from "../pages/auth/SignUpForm";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';

const NavBar = () => {

  return (
  
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact="true"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              to="/coaching"
            >
              <i className="fas fa-home"></i>Coach Area
            </NavLink>
            <NavLink
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              to="/dashboard"
            >
              <i className="fas fa-sign-in-alt"></i>Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
            >
              <i className="fas fa-user-plus"></i>Login
            </NavLink>
            <NavLink
              to="/register"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
            >
              <i className="fas fa-user-plus"></i>Register
            </NavLink>
            <NavLink
              to="/register"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              
              to="/profile"
              className={ ({ isActive }) => isActive ? styles.Active : styles.NavLink}
              >
              Profile</NavLink>
          

          
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; 
export default NavBar;