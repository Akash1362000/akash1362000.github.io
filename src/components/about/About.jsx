import React from 'react';
import './about.css';
import Akash_Profile from '../../assets/Akash_Profile.png';
import { SlBadge } from 'react-icons/sl';
import { BsPeopleFill } from 'react-icons/bs';
import { ImFolderOpen } from 'react-icons/im';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Akash_Profile} alt="Akash Shrivastava" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SlBadge className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about__card">
              <BsPeopleFill className="about__icon" />
              <h5>Clients</h5>
              <small>3 Clients</small>
            </article>
            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos illo
            distinctio numquam ipsum! Error, sit nobis! Incidunt nobis veritatis
            hic mollitia dicta. Laudantium aut nemo eos magni quae qui,
            molestias, repellat modi temporibus vel nulla tempora, voluptate
            nobis corrupti eius laboriosam! Quidem aliquid esse minus ipsum nam
            laborum rerum ipsa.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
