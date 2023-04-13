import React from "react";
import "./blogs.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import.js";

const blogs_data = [
  {
    imgSrc: blog01,
    imgAlt: "blog01",
    date: "Sep 26, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequuntur!",
    footer: "Read Full Article",
  },
  {
    imgSrc: blog02,
    imgAlt: "blog02",
    date: "Sep 26, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequuntur!",
    footer: "Read Full Article",
  },
  {
    imgSrc: blog03,
    imgAlt: "blog03",
    date: "Sep 26, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequuntur!",
    footer: "Read Full Article",
  },
  {
    imgSrc: blog04,
    imgAlt: "blog04",
    date: "Sep 26, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequuntur!",
    footer: "Read Full Article",
  },
  {
    imgSrc: blog05,
    imgAlt: "blog05",
    date: "Sep 26, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequuntur!",
    footer: "Read Full Article",
  },
];
const Blog = ({ imgSrc, imgAlt, date, content, footer }) => (
  <article className="blog">
    <div className="blog__img">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <div className="blog__container">
      <p className="blog__date">{date}</p>
      <p className="blog__content">{content}</p>
      <footer className="blog__footer">{footer}</footer>
    </div>
  </article>
);
const Blogs = () => {
  return (
    <section className="blogs section__margin">
      <h1 className="blogs__heading gradient-text">A lot is happening, We are blogging about it.</h1>
      <div className="blogs__container">
        {blogs_data.map((blog_data) => (
          <Blog {...blog_data} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
