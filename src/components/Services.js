import React from 'react';
import '../styles/services.css';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Custom Software Development</h3>
          <p>
            Our software solutions are tailored to meet the specific needs of your business, enabling efficient operations and enhanced productivity.
          </p>
          <button className="cta-button">Explore More</button>
        </div>
        <div className="service-item">
          <h3>Cloud Computing Solutions</h3>
          <p>
            We help businesses adopt cloud technologies, improving scalability, flexibility, and reducing infrastructure costs.
          </p>
          <button className="cta-button">Explore More</button>
        </div>
        <div className="service-item">
          <h3>Cybersecurity Services</h3>
          <p>
            Our cybersecurity solutions safeguard your digital assets, ensuring data security and compliance with industry regulations.
          </p>
          <button className="cta-button">Explore More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
