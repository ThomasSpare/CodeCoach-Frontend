
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated } = useSelector(state => state.user);


  const authLinks = (
		<React.Fragment>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/dashboard'>
					Dashboard
				</NavLink>
			</li>
			<li className='nav-item'>
				<a className='nav-link' href='#!'>
					Logout
				</a>
			</li>
      </React.Fragment>
	);

  const guestLinks = (
    <React.Fragment>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/login'>
					Login
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/register'>
					Register
				</NavLink>
			</li>
    </React.Fragment>
	);
  
return (  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className='navbar-brand' to='/'>
        Code Coach
      </Link>
      <img class="mr-3 rounded mx-auto d-block" src="frontend/src/assets/CodeCoachLogo_edited.jpg" alt="Code Coach logo"></img>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDropdown" 
      aria-controls="navbarNavDropdown" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className='nav-link' to='/'> 
            Home
            </NavLink>
          </li>
          {isAuthenticated ? authLinks : guestLinks }
          <li className="nav-item">
            <NavLink className='nav-link' to='/profile'> 
            Profile
            </NavLink>
          </li>
          {isAuthenticated ? authLinks : guestLinks} 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Code Coaching
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">HTML/ CSS</a></li>
              <li><a className="dropdown-item" href="#">Python</a></li>
              <li><a className="dropdown-item" href="#">Javascript</a></li>
              <li><a className="dropdown-item" href="#">Databases</a></li>
              <li><a className="dropdown-item" href="#">Django</a></li>
              <li><a className="dropdown-item" href="#">Django REST</a></li>
              <li><a className="dropdown-item" href="#">Bootstrap</a></li>
              <li><a className="dropdown-item" href="#">Other Frontend Libraries</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}; 
export default NavBar;