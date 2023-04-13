import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const whatGPT3_features_data = [
  {
    title: "What is GPT-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "Chatbots",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "What is GPT-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "What is GPT-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
];

const WhatGPT3 = () => {
  return (
    <section className="whatGTP3 section__margin">
      <Feature title={whatGPT3_features_data[0].title} text={whatGPT3_features_data[0].text} modifier="feature_main" />
      <div className="whatGPT__heading gradient-text">
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatGPT__features-container">
        {whatGPT3_features_data.slice(1).map((feature_data) => (
          <Feature title={feature_data.title} text={feature_data.text} />
        ))}
      </div>
    </section>
  );
};

export default WhatGPT3;
