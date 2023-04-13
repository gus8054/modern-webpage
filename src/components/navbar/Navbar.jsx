import { React, useState } from "react";
import "./navbar.css";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../../assets/logo.svg";

const Menu = ({ className }) => (
  <ul className={className}>
    <li className="navbar__link">
      <a href="#">Home</a>
    </li>
    <li className="navbar__link">
      <a href="#">What Is GPT?</a>
    </li>
    <li className="navbar__link">
      <a href="#">Open AI</a>
    </li>
    <li className="navbar__link">
      <a href="#">Case Studies</a>
    </li>
    <li className="navbar__link">
      <a href="#">Library</a>
    </li>
  </ul>
);
const Sign = ({ className }) => (
  <ul className={className}>
    <li className="navbar__sign-in">
      <a href="#">Sign In</a>
    </li>
    <li className="navbar__sign-up">
      <a href="#">Sign up</a>
    </li>
  </ul>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src={logo} alt="logo" />
      </a>
      <Menu className="navbar__links-container" />
      <Sign className="navbar__sign-container" />
      <button className="navbar__menu-btn" onClick={() => setToggleMenu((pre) => !pre)}>
        {toggleMenu ? <CgClose /> : <CgMenu />}
      </button>
      {toggleMenu && (
        <div className="navbar__menu-container scale-up-center">
          <Menu className="navbar__menu__link-container" />
          <Sign className="navbar__menu__sign-container" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
