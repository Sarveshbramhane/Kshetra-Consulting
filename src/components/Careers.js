// src/components/Careers.js
import React from 'react';
import '../styles/careers.css'; // Create this CSS file

const Careers = () => {
  const positions = [
    {
      title: 'Campaign Manager',
      description: '(Leader Associate)',
      languages: '18 Marathi – 15 Telugu',
    },
    {
      title: 'HR Associate',
      description: '(Political & Stakeholder Management)',
    },
    {
      title: 'Associate',
      description: '(Assembly Managers: On Ground Political Campaign)',
    },
    {
      title: 'Media Analyst',
      description: '(Publish Articles on webnews portals) - English, Telugu, Marathi',
    },
    {
      title: 'Kshetra Fellow',
      description: '(Political Networker, Intern Recruitment, Placement)',
    },
    {
      title: 'Media Interns',
      description: '(Political Networker, Media presence, Media training)',
    },
  ];

  return (
    <div className="careers">
      <section className="intro">
        <h1>Join Our Team</h1>
        <p>
          We at Kshetra pride ourselves on offering a diverse array of career opportunities, catering to individuals at every stage of their professional journey. Whether it's internships, fellowships, or full-time positions, we believe in providing avenues for growth and development. Our work culture is built on the principles of collaboration, innovation, and flexibility.
        </p>
        <p>
          With flexible hours and a competitive salary structure, we empower our team members to thrive while maintaining a healthy work-life balance. At Kshetra, we foster an environment where learning is encouraged, and every individual is given the opportunity to gain valuable experience in their chosen field.
        </p>
      </section>

      <section className="positions">
        <h2>Positions Open</h2>
        <div className="position-cards">
          {positions.map((position, index) => (
            <div className="position-card" key={index}>
              <h3>{position.title}</h3>
              <p>{position.description}</p>
              {position.languages && <p>{position.languages}</p>}
              <button className="cta-button">Apply</button>
            </div>
          ))}
        </div>
      </section>

      <section className="application-form">
        <h2>Apply Today</h2>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Position I'm applying for</option>
            {positions.map((position, index) => (
              <option key={index} value={position.title}>{position.title}</option>
            ))}
          </select>
          <input type="url" placeholder="Link to Your Resume" required />
          <button className="cta-button" type="submit">Apply Now</button>
        </form>
      </section>

      <footer className="contact-info">
        <h2>Kshetra Consulting</h2>
        <p>Lotus pond, Hyderabad - 500096</p>
        <p>Phone: +919971317486</p>
        <p>Email: hr@kshetra.org</p>
      </footer>
    </div>
  );
};

export default Careers;
