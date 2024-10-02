// src/components/BharatFellowship.js
import React from 'react';
import '../styles/fellowship.css';

const BharatFellowship = () => {
  return (
    <div className="fellowship-container">
      <h1>Bharat Elects Fellowship</h1>
      <p>Kshetra works to collect people’s aspirations...</p>
      <h2>Eligibility Criteria</h2>
      <ul>
        <li>Currently an on-course student of 2nd or 3rd year.</li>
        <li>The student will complete graduation by June/July - 2025/2026.</li>
        <li>Can put in an approximate amount of serious work of 3-4 hours per day.</li>
        <li>Can manage fellowship work along with institute course.</li>
        <li>Citizen of India or Overseas Citizen of India (OCI).</li>
      </ul>
      
      <h2>Selection Process</h2>
      <ol>
        <li>Application</li>
        <li>Interview</li>
        <li>Selection</li>
      </ol>
      
      <h2>Roles and Responsibilities</h2>
      <ul>
        <li>Enable research and data-driven policy insights to MLAs.</li>
        <li>Presenting innovative solutions for shaping robust policies.</li>
        {/* Add more roles and responsibilities */}
      </ul>

      <h2>FAQs</h2>
      <p>What is Bharat Elects Fellowship?...</p>
      {/* Add more FAQs as needed */}
    </div>
  );
};

export default BharatFellowship;
