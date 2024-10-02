import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Kshetra Consulting</h1>
        <p><b>Strengthening Democracy through Strategy and Innovation</b></p>
        <button className="cta-button">
          <Link to="/about">Learn More</Link>
        </button>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview">
        <h2>About Kshetra Consulting</h2>
        <p>
          Kshetra Consulting is a non-profit, non-partisan political consulting organization 
          based in Telangana, Karnataka, and Maharashtra. For over 7 years, we have been working 
          towards strengthening Indian democracy by providing strategic support to political 
          parties, leaders, and change-makers. Our services range from grassroots mobilization to 
          policy design, aimed at creating a larger socio-political impact.
        </p>
        <button className="cta-button">
          <Link to="/about">Learn More</Link>
        </button>
      </section>

      {/* Director's Message */}
      <section className="directors-message">
        <h2>Director's Message</h2>
        <p>
          "Kshetra Consulting is dedicated to providing political leaders with essential 
          support in research, campaign management, and development initiatives. We aim to 
          create an impact that goes beyond electioneering by partnering with development-oriented 
          leaders and political parties across India."
        </p>
        <p><strong>Rishikesh Reddy</strong></p>
        <p>Director, Kshetra Consulting</p>
      </section>

      {/* Our Alumni Section */}
      <section className="alumni">
        <h2>Our Alumni</h2>
        <p>
          Our alumni have amazing stories and insightful experiences from their time at Kshetra. 
          They have contributed to public policy, political strategy, and grassroots initiatives 
          across India.
        </p>
        <button className="cta-button">
          <Link to="/about">Learn More</Link>
        </button>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Kshetra was initiated by Rishikesh Reddy, an XLRI alum, and co-founded by alumni of 
          IIT Madras, IIT Delhi, and IIM Ahmedabad. With experience from World Bank, IPAC, and 
          state governments, we provide strategic support to political and governmental bodies. 
          We specialize in political campaigns, election management, governance initiatives, 
          media communications, and policy analysis.
        </p>
      </section>

      {/* Technologies and Upcoming Initiatives */}
      <section className="technologies">
        <h2>Our Work and Future Technologies</h2>
        <p>
          At Kshetra, you’ll work on political grassroots projects to create tangible impact. 
          Our innovative initiatives like the Door to Door Voter Outreach have reached over 1 
          crore households. We are also excited about the future, embracing technologies like:
        </p>
        <ul className="tech-list">
          <li>Big Data for Electoral Campaigns</li>
          <li>AI for Voter Behavior Analysis</li>
          <li>Cloud Technologies for Political Communication</li>
          <li>Blockchain for Secure Voting</li>
        </ul>
        <button className="cta-button">
          <Link to="/services">Explore Our Services</Link>
        </button>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Kshetra Consulting<br />
          Lotus Pond, Hyderabad - 500096<br />
          Phone: +91 9971317486<br />
          Email: hr@kshetra.org
        </p>
        <button className="cta-button">
          <Link to="/contact">Get In Touch</Link>
        </button>
      </section>
    </div>
  );
}

export default Home;
