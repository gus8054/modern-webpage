import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const features_data = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita autem optio aspernatur tenetur dolor fugiat reiciendis omnis, molestias modi sint!",
  },
];

const Features = () => {
  return (
    <section className="features section__padding">
      <div className="features__heading gradient-text">
        <h1>The Future is Now and You Just Need to Realize It. Step into Future Today. &amp; Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {features_data.map((feature_data) => (
          <Feature modifier="feature_main" title={feature_data.title} text={feature_data.text} />
        ))}
      </div>
    </section>
  );
};

export default Features;
