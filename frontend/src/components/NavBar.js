
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/CodeCoachLogo_edited.jpg";

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
      <img className="mr-3 rounded mx-auto d-block" src={logo} alt="Code Coach logo"></img>
      <button className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDropdown" 
      aria-controls="navbarNavDropdown" 
      aria-expanded="" 
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
            Coaches
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Code Coaching
            </a>
            <ul className="dropdown-menu">
            
            <div class="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Coaching Areas
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" ><a tabindex="0" className="btn btn-lg btn-info" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">HTML</a>
                </a>
                <a className="dropdown-item" href="#">Another action</a>
                <a classame="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}; 
export default NavBar;