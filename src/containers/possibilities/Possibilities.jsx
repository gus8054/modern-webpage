import React from "react";
import "./possibilities.css";
import possibility from "../../assets/possibility.jpg";

const Possibilities = () => {
  return (
    <section className="possibilities section__margin">
      <div className="possibilities__img">
        <img src={possibility} alt="possibilities" />
      </div>
      <div className="possibilities__container">
        <h4 className="possibilities__subtitle">Request Early Access to Get Started</h4>
        <h1 className="possibilities__title gradient-text">The possibilities are beyond your imagination</h1>
        <p className="possibilities__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus quam repellat commodi eligendi. Omnis, corporis. Aut dicta autem delectus.</p>
        <h4 className="possibilities__subtitle">Request Early Access to Get Started</h4>
      </div>
    </section>
  );
};

export default Possibilities;
