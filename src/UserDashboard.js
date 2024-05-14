import React, { useEffect, useState } from 'react';
import './userdashboard.css';
import RequestMaterial from './RequestMaterial';
import DocumentUpload from './DocumentUpload';
import Footer from './footer';
import UserNavbar from './UserNavbar';
import LabManual from './LabManual';
import axios from 'axios';
import Profile from './Profile';

const UserDashboard = ({userId}) => {
  // State variables for profile update form
  // State variables for material request form

  // State variables for document upload
  const [document, setDocument] = useState(null);

  const [showMaterialRequestsForm, setShowMaterialRequestsForm] = useState(false);
  const [showDocumentUploadForm, setDocumentUploadForm] = useState(false);
  const [showLabManual, setShowLabManual] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  // Function to handle profile update submission
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add logic to update user profile
  };

  // Function to handle material request submission

  // Function to handle document upload
  const handleDocumentUpload = (e) => {
    e.preventDefault();
    // Add logic to upload document
  };
  const handleToggleRequestForm = () => {
    setShowMaterialRequestsForm(!showMaterialRequestsForm);
    setDocumentUploadForm(false);
    setShowLabManual(false);
    setShowProfile(false);
    
  };
  const handleToggleDocumentForm = () => {
    setDocumentUploadForm(!showDocumentUploadForm);
    setShowMaterialRequestsForm(false);
    setShowLabManual(false);
    setShowProfile(false);
  };
  const handleToggleLabManual = () => {
    setShowLabManual(!showLabManual);
    setShowMaterialRequestsForm(false);
    setDocumentUploadForm(false);
    setShowProfile(false);
  }
  const handleToggleProfile = () => {
    setShowProfile(!showProfile);
    setShowMaterialRequestsForm(false);
    setDocumentUploadForm(false);
    setShowLabManual(false);
  }
  


  return (
    <div className="user-dashboard">
      <UserNavbar />
      <div className="user-container">
      <aside className='user-sidebar'>
        <h2>TOOLS</h2>
       <section className='mtrl-form' onClick={handleToggleRequestForm}>Request Material</section>
       <section className='dcmnt-upld' onClick={handleToggleDocumentForm}>Upload Document</section>
       <section className='lb-mnl' onClick={handleToggleLabManual}>Lab Manuals</section>
       <section className='ntfcn' onClick={handleToggleProfile}>Profile</section>
      {/* <section className='material-request-ftr' onClick={handleToggleMaterialRequests}>MATERIAL REQUEST</section>  */}
      </aside>
        {/* <aside className="sidebar">
          <h2>Sidebar</h2>
          <div className="sidebar-feature">
            <button onClick={handleToggleMaterialRequests}>Material Requests</button>
            {showMaterialRequests && <MaterialRequests/>}
          </div>
        </aside> */}
        <main className="user-main-content">         
           <section className='features'>
            {showMaterialRequestsForm && <RequestMaterial/>}
            {showDocumentUploadForm && <DocumentUpload/>}
            {showLabManual && <LabManual/>}
            {showProfile && <Profile/>}
           {/* {showPrintQueue && <PrintQueue />}
           {showMaterialRequestsForm && <MaterialRequests/>} */}
          </section> 
          {/* <section className="admin-notifications">
            <h2>Notifications</h2>
          </section> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
