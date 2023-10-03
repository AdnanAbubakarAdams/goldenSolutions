import React, { useState } from "react";
import { Link } from "react-router-dom";

// STYLE SHEETS
import "./NavBar.scss";

const NavBar = () => {
  const [active, setActive] = useState("navBar__menu");
  const [icon, setIcon] = useState("navBar__toggler");

  const navBarToggle = () => {
    if (active === "navBar__menu") {
      setActive("navBar__menu navBar__active");
    } else {
      setActive("navBar__menu");
    }

    // for the icon toggling
    if (icon === "navBar__toggler") {
      setIcon("navBar__toggler toggle");
    } else {
      setIcon("navBar__toggler");
    }
  };

  return (
    <nav className="navBar">
      <Link to="/" className="navBar__logo">
        <img src="/images/GoldenSolutionLite.png" alt="theLogo" />
      </Link>
      <ul className={active}>
        <li className="navBar__lists">
          <Link to="/seniors" className="navBar__links">
            Seniors
          </Link>
        </li>
        <li className="navBar__lists">
          <Link to="/volunteers" className="navBar__links">
            Volunteers
          </Link>
        </li>
        <li className="navBar__lists">
          <Link to="/testimonials" className="navBar__links">
            Testimonials
          </Link>
        </li>
        <li className="navBar__lists">
          <button>Login</button>
        </li>
      </ul>
      <div onClick={navBarToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
