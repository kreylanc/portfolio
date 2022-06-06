import React from "react";
import "./Skills.css";
import {
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiNodejs,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { FaReact, FaJava, FaPython, FaNodeJs, FaPhp } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container">
      <section>
        <h5>Technologies I Use</h5>
        <h2>My Skills</h2>

        <div className="skills__container">
          <div className="skills__frontend">
            <h3>Front-end Development</h3>
            <div className="skills__content">
              <article className="skills__details">
                <div className="skills__details-icon">
                  <DiHtml5 />
                </div>
                <div>
                  <h4>HTML</h4>
                  <small className="text__light">Experienced</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <DiCss3 />
                </div>
                <div>
                  <h4>CSS</h4>
                  <small className="text__light">Experienced</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <IoLogoJavascript />
                </div>
                <div>
                  <h4>Javascript</h4>
                  <small className="text__light">Intermediate</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <FaReact />
                </div>
                <div>
                  <h4>React</h4>
                  <small className="text__light">Intermediate</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <SiCsharp />
                </div>
                <div>
                  <h4>C#</h4>
                  <small className="text__light">Intermediate</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <FaJava />
                </div>
                <div>
                  <h4>JAVA</h4>
                  <small className="text__light">Basic</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <FaPython />
                </div>
                <div>
                  <h4>Python</h4>
                  <small className="text__light">Basic</small>
                </div>
              </article>
            </div>
          </div>
          <div className="skills__backend">
            <h3>Back-end Development</h3>
            <div className="skills__content">
              <article className="skills__details">
                <div className="skills__details-icon">
                  <DiMysql />
                </div>
                <div>
                  <h4>MySQL</h4>
                  <small className="text__light">Intermediate</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <DiMongodb />
                </div>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text__light">Basic</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <FaPhp />
                </div>
                <div>
                  <h4>PHP</h4>
                  <small className="text__light">Basic</small>
                </div>
              </article>
              <article className="skills__details">
                <div className="skills__details-icon">
                  <FaNodeJs />
                </div>
                <div>
                  <h4>NodeJS</h4>
                  <small className="text__light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
