import * as React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand text-white">Blogs-R-Us</Link>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-alt" >
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="nav-alt" >
        <div className="navbar-nav ml-auto" >
          <NavLink exact to="/" className="btn btn-secondary mx-1" >
            View Blogs
              </NavLink>
          <NavLink exact to="/profile" className="btn btn-secondary mx-1" >
            Your Profile
              </NavLink>
          <NavLink exact to="/contact" className="btn btn-secondary mx-1" >
            Contact Us
              </NavLink>
              <NavLink exact to="/donate" className="btn btn-secondary mx-1" >
            Donate
              </NavLink>
          <NavLink exact to="/Login" className="btn btn-success mx-1" >
            Login / Sign Up
              </NavLink>
        </div>
      </div>
    </nav>
  )
}

interface NavBarProps { }

export default NavBar