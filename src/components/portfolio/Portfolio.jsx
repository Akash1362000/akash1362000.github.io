import React from 'react';
import './portfolio.css';

const data = [
  {
    id: 1,
    image: 'https://i.imgur.com/Q5G9esL.png',
    title: 'Everything EV',
    github: 'https://github.com/Praful932/EverythingEV',
    demo: 'https://everything-ev.up.railway.app/',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/IMhORLs.png',
    title: 'Student Management System',
    github: 'https://github.com/Akash1362000/Django_Student_Management_System',
    demo: 'https://student-management-system-4jym.onrender.com/',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/QwOTPyS.png',
    title: 'News Web App',
    github: 'https://github.com/Akash1362000/News-Web-App/',
    demo: 'https://news-web-app-8pf8.onrender.com/',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/mpntklM.gif',
    title: 'Blog App',
    github: 'https://github.com/Akash1362000/Django_BlogApp',
    demo: 'https://github.com/Akash1362000/Django_BlogApp#demo-',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
