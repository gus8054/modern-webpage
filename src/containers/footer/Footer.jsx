import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer section__padding">
      <div className="footer__heading">
        <h1 className="footer__title gradient-text">Do you want to step in to the future before others</h1>
        <button type="button" className="footer_btn">
          Request Early Access
        </button>
      </div>
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, commodi!</p>
        </div>
        <ul className="footer__nav">
          <li className="footer__link">Links</li>
          <li className="footer__link">
            <a href="#">Overons</a>
          </li>
          <li className="footer__link">
            <a href="#">Overons</a>
          </li>
          <li className="footer__link">
            <a href="#">Overons</a>
          </li>
          <li className="footer__link">
            <a href="#">Overons</a>
          </li>
        </ul>
        <ul className="footer__nav">
          <li className="footer__link">Company</li>
          <li className="footer__link">
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li className="footer__link">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer__link">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="footer__nav">
          <li className="footer__link">Get in touch</li>
          <li className="footer__link">
            <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
          </li>
          <li className="footer__link">
            <a href="#">012-3456-7890</a>
          </li>
          <li className="footer__link">
            <a href="#">abce@efghi.net</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">&copy;2023 donghyun All rigths reserved.</div>
    </footer>
  );
};

export default Footer;
