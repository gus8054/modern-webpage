import React from "react";
import "./feature.css";
const Feature = ({ title, text, modifier }) => (
  <article className={"feature " + modifier}>
    <h4 className="feature__title">{title}</h4>
    <p className="feature__text">{text}</p>
  </article>
);

export default Feature;
