import React from 'react';
import './about.css';
import Akash_Shrivastava from '../../assets/Akash_Shrivastava.jpg';
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
            <img src={Akash_Shrivastava} alt="Akash Shrivastava" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SlBadge className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
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
            I am a Backend Developer with 2 years of experience in developing
            Python, Django and Flask Applications for various clients varying
            from startups to NGOs. I've worked in Fintech, Edtech, Productivity
            and Healthcare projects and built scalable solutions for my clients.
            I am well-versed in developing RESTful APIs, creating robust backend
            architectures, and optimizing database performance.
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
