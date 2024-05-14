import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className='c1'>
        <h1>About Us</h1>
        <p>Welcome to our Stationary Management Project! We are a team of dedicated individuals passionate about organizing and managing stationary supplies efficiently.</p>
      </div>
      <div className='c2'>
        <h2>Our Mission</h2>
        <p>Our mission is to provide a user-friendly platform that simplifies the process of managing stationary inventory for businesses, schools, and individuals.</p>
      </div>
      <div className='c3'>
        <h2>What We Offer</h2>
        <p>Our platform offers a comprehensive set of features including:</p>
      </div>
      <div className='c4'>
        <ul>
          <li>Inventory management</li>
          <li>Order tracking</li>
          <li>Supplier management</li>
          <li>Reporting and analytics</li>
          <li>And much more!</li>
        </ul>
      </div>
      <div className='c5'>
        <h2>Why Choose Us?</h2>
        <p>We understand the importance of efficient stationary management for businesses and educational institutions. Our platform is designed to streamline processes, save time, and reduce costs.</p>
      </div>
      <div className='c6'>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, please feel free to reach out to us at <a href="mailto:contact@stationarymanagement.com">contact@stationarymanagement.com</a>.</p>
      </div>
    </div>
  );
};

export default AboutUs;
