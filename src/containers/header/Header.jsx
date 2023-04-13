import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <header className="header section__padding">
      <Navbar />
      <div className="header__container">
        <h1 className="header__title gradient-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
        <p className="header__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, facilis! Autem eius a nisi qui repellendus obcaecati sequi aliquid necessitatibus.</p>
        <div className="header__email">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__people">
          <img src={people} alt="people" />
          <p>1,000 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__ai">
        <img src={ai} alt="ai" />
      </div>
    </header>
  );
};

export default Header;
