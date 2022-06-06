import React from "react";
import "./Projects.css";
import genshin from "../../assets/genshin.png";
import netflix from "../../assets/netflix.png";
import ecommerce from "../../assets/ecommerce.png";
import fyp from "../../assets/fyp.png";
import PortfolioCard from "./PortfolioCard";

const Projects = () => {
  return (
    <div className="container">
      <section>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        <div className="portfolio__container">
          <PortfolioCard
            link="https://github.com/kreylanc/genshin-info"
            imgsrc={genshin}
            isReversed={false}
            title="Genshin Impact Info Page"
            subtitle="Personal Project/Front-end Development"
            description="A page for different infos regarding the ARPG game, Genshin Impact, made while learning about ReactJS and TailwindCSS."
          />
          <PortfolioCard
            link="https://github.com/kreylanc/MERN-Stack-Ecommerce"
            imgsrc={ecommerce}
            isReversed={true}
            title="E-Commerce Web Application"
            subtitle="Personal Project/Full Stack Development"
            description="Application made using MERN (MongoDB, ExpressJS, ReactJS, and NodeJS) stack and material UI for styling."
          />
          <PortfolioCard
            link="https://github.com/kreylanc/netflix-clone"
            imgsrc={netflix}
            isReversed={false}
            title="Netflix Front Page Clone"
            subtitle="Personal Project/Front-end Development"
            description="A simple clone of Netflix home screen page developed with ReactJS and TailwindCss using the TMDB API for the movie list."
          />
          <PortfolioCard
            imgsrc={fyp}
            isReversed={true}
            title="Unity 3D Game Project"
            subtitle="College Final Year Project"
            description="A 2D platformer game made using Unity 3D engine with PHP and mySQL for backend."
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
