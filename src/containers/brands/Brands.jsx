import React from "react";
import "./brands.css";
import { atlassian, dropbox, google, shopify, slack } from "./import.js";

const Brands = () => {
  return (
    <section className="brands section__padding">
      <div className="brands__container">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className="brands__container">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="brands__container">
        <img src={google} alt="google" />
      </div>
      <div className="brands__container">
        <img src={shopify} alt="shopify" />
      </div>
      <div className="brands__container">
        <img src={slack} alt="slack" />
      </div>
    </section>
  );
};

export default Brands;
