import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ContentSection from './ContentSection';
import Registration from './Registration';
import Navbar from './Navbar';

const LandingPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleGetStartedClick = () => {
    setShowRegistration(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistration(false);
  };
  return (
      <div className={`blur-container ${showRegistration ? 'blur' : ''}`}>
    <div className="App">
      <Navbar/>
        <section className="hero-section">
        <div className="hero-content">
           <h1 className="fade-in-up">Welcome to <span>DOCVERSE</span></h1>
           <p className="fade-in-up">Explore the universe of documents, Eat Print Repeat.</p>
         </div>
         
          {/* ... Your existing hero section content ... */}
          <Link to="/register" className="cta-button fade-in-up" onClick={handleGetStartedClick}>
            Get Started <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <div className="hero-image">
           <img src={process.env.PUBLIC_URL + '/titlebg3.jpg'} alt='' />
         </div>
        </section>
      {showRegistration && <Registration onBack={handleCloseRegistration} />}
        <ContentSection />
      </div>
    </div>
  );
};

export default LandingPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import ContentSection from './ContentSection';
// import Registration from './Registration';
// import Footer from './footer';

// const LandingPage = () => {
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleGetStartedClick = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div className={`App ${showRegistration ? 'blur' : ''}`}>
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1 className="fade-in-up">Welcome to <span>DOCVERSE</span></h1>
//           <p className="fade-in-up">Explore the universe of documents, Eat Print Repeat.</p>
//           <button className="cta-button fade-in-up" onClick={handleGetStartedClick}>
//             Get Started <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//         <div className="hero-image">
//           <img src={process.env.PUBLIC_URL + '/titlebg.jpg'} alt='' />
//         </div>
//       </section>
//       <ContentSection />
//       {showRegistration && <Registration onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default LandingPage;
