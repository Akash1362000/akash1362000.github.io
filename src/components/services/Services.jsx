import React from 'react';
import './services.css';
import { GiCheckMark } from 'react-icons/gi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Building Web applications using Python and Django for various
                industries such as eCommerce, Edtech, Healthcare, Productivity,
                and more.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Developing RESTful APIs using Django REST framework for mobile
                applications & web applications
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Designing and implementing databases using MySQL, PostgreSQL,
                SQLite, and Redis.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Integration of third-party APIs and services such as payment
                gateways, social media platforms, and messaging services.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Implementing security features such as authentication, and
                authorization using OAuth2 and JWT tokens.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Writing scalable and efficient code using best practices such as
                code optimization, caching, and load balancing.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Providing maintenance and support services for existing Django
                applications and databases.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Creating technical documentation and user manuals for end-users
                and stakeholders.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>
                Conducting training sessions and workshops for Python Django
                development and related technologies.
              </p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Implementing Push Notifications using Firebase.</p>
            </li>
            <li>
              <GiCheckMark className="service__list-icon" />
              <p>Well versed with using Twitter and Notion API's.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
