// import React from 'react';
// import './admindashboard.css';

// const AdminDashboard = () => {
//   // Placeholder data for material requests
//   const materialRequests = [
//     { id: 1, requester: 'John Doe', materials: ['Pens', 'Notebooks'], quantity: 10, date: '2024-01-30' },
//     // Add more requests as needed
//   ];

//   // Placeholder data for documents
//   const documents = [
//     { id: 1, name: 'Document 1', uploader: 'Jane Smith', date: '2024-01-30', fileUrl: 'https://example.com/document1.pdf' },
//     // Add more documents as needed
//   ];

//   // Placeholder data for print queue
//   const printQueue = [
//     { id: 1, document: 'Document 1', requester: 'Jane Smith', date: '2024-01-30' },
//     // Add more print jobs as needed
//   ];

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>

//       {/* Material Requests Section */}
//       <section className="material-requests">
//         <h2>Material Requests</h2>
//         {/* Display material requests here */}
//       </section>

//       {/* Document Management Section */}
//       <section className="document-management">
//         <h2>Document Management</h2>
//         {/* Display uploaded documents here */}
//       </section>

//       {/* Print Queue Management Section */}
//       <section className="print-queue">
//         <h2>Print Queue Management</h2>
//         {/* Display print queue here */}
//       </section>

//       {/* Notifications Section (optional) */}
//       <section className="notifications">
//         <h2>Notifications</h2>
//         {/* Display notifications here */}
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React from 'react';
// import './admindashboard.css';

// const AdminDashboard = () => {
//   // Placeholder data for material requests
//   const materialRequests = [
//     { id: 1, requester: 'John Doe', materials: ['Pens', 'Notebooks'], quantity: 10, date: '2024-01-30' },
//     // Add more requests as needed
//   ];

//   // Placeholder data for documents
//   const documents = [
//     { id: 1, name: 'Document 1', uploader: 'Jane Smith', date: '2024-01-30', fileUrl: 'https://example.com/document1.pdf' },
//     // Add more documents as needed
//   ];

//   // Placeholder data for print queue
//   const printQueue = [
//     { id: 1, document: 'Document 1', requester: 'Jane Smith', date: '2024-01-30' },
//     // Add more print jobs as needed
//   ];

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Admin Dashboard</h1>
//       </div>
//       <div className="sidebar">
//         <h2>Sidebar</h2>
//         {/* Add sidebar content here */}
//       </div>
//       <div className="main-content">
//         {/* Material Requests Section */}
//         <section className="dashboard-section material-requests">
//           <h2>Material Requests</h2>
//           {/* Display material requests here */}
//         </section>

//         {/* Document Management Section */}
//         <section className="dashboard-section document-management">
//           <h2>Document Management</h2>
//           {/* Display uploaded documents here */}
//         </section>

//         {/* Print Queue Management Section */}
//         <section className="dashboard-section print-queue">
//           <h2>Print Queue Management</h2>
//           {/* Display print queue here */}
//         </section>

//         {/* Notifications Section (optional) */}
//         <section className="dashboard-section notifications">
//           <h2>Notifications</h2>
//           {/* Display notifications here */}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from 'react';
import './admindashboard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import MaterialRequests from './MaterialRequests';
import Footer from './footer';
import { getDocument } from 'pdfjs-dist';
import pdfjsLib from 'pdfjs-dist';
import PrintQueue from './PrintQueue';
import Navbar from './Navbar';
import UserNavbar from './UserNavbar';


const AdminDashboard = () => {
  // Placeholder data for material requests
  const [materialRequests, setMaterialRequests] = useState([]);
  
  const [showMaterialRequests, setShowMaterialRequests] = useState(false);
  const [showPrintQueue, setShowPrintQueue] = useState(false);// Initially show Material Requests
  
  const handleToggleMaterialRequests = () => {
    setShowMaterialRequests(!showMaterialRequests);
    setShowPrintQueue(false)
   
  };
  const handleTogglePrintQueue = () => {
    setShowPrintQueue(!showPrintQueue);
    setShowMaterialRequests(false)
  }

  return (
    <div className="admin-dashboard">
  
      <UserNavbar/>
      <div className="admin-container">
      <aside className='admin-sidebar'>
        <h2>MANAGE</h2>
      <section className='print-queue' onClick={handleTogglePrintQueue}>PRINT QUEUE</section>
      <section className='material-request-ftr' onClick={handleToggleMaterialRequests}>MATERIAL REQUEST</section>
      </aside>
        {/* <aside className="sidebar">
          <h2>Sidebar</h2>
          <div className="sidebar-feature">
            <button onClick={handleToggleMaterialRequests}>Material Requests</button>
            {showMaterialRequests && <MaterialRequests/>}
          </div>
        </aside> */}
        <main className="main-content">
           <section className='admin-features'>
           {showPrintQueue && <PrintQueue />}
           {showMaterialRequests && <MaterialRequests/>}
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

export default AdminDashboard;
