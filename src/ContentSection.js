// ContentSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faBook, faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import './cards.css';
import Footer from './footer';
import './Footer.css'

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="card-container">
        <div className="card card-why-to-use">
          <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
          <h2>Why to Use</h2>
          <p>Discover the benefits of using our website. Now you dont have to use G-mail whatsapp for printing out your documents, just simply click on upload document and upload documents and it will be stored in print queue and it will be sorted by uploading time and you will get your print on your time.</p>
        </div>
        <div className="card card-materials">
          <FontAwesomeIcon icon={faBook} size="3x" />
          <h2>Materials</h2>
          <p>Explore a wide range of materials available.</p>
        </div>
        <div className="card card-products">
          <FontAwesomeIcon icon={faCompassDrafting} size="3x" />
          <h2>Products</h2>
          <p>Check out our featured stationary products.</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ContentSection;
