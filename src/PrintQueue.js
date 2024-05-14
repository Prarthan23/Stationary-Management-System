import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faPrint, faRefresh, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import moment from 'moment';
import './printqueue.css';

const PrintQueue = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch the list of documents from the backend when the component mounts
    fetchDocuments();
  }, []); // Empty dependency array to run only once on mount

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:3001/FetchDocument');
      if (response.ok) {
        const data = await response.json();
        setDocuments(data); // Update the documents state with the fetched data
      } else {
        throw new Error('Failed to fetch documents');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const previewDocument = async (filename) => {
    try {
      // Fetch the document from the backend
      const response = await fetch(`http://localhost:3001/FetchDocument/${filename}`);
      if (!response.ok) {
        throw new Error('Failed to fetch document');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Open the document in a new tab
      window.open(url);
    } catch (error) {
      console.error('Error previewing document:', error);
    }
  };
  const formatUploadTime = (uploadTime) => {
    return moment(uploadTime).format('MMMM Do YYYY, h:mm:ss a');
  };
  const printDocument = async (filename) => {
    try {
      // Fetching the document from the backend
      const response = await fetch(`http://localhost:3001/FetchDocument/${filename}`);
      if (!response.ok) {
        throw new Error('Failed to fetch document');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Open the document in a new tab and print it
      const printWindow = window.open(url);
      printWindow.onload = () => {
        printWindow.print();
      };
    } catch (error) {
      console.error('Error printing document:', error);
    }
  };

  const handleDeleteDocument = (id) => {
    // Remove the document from the frontend
    setDocuments(documents.filter(document => document._id !== id));

    // Remove the document from the backend and disk
    axios.delete(`http://localhost:3001/DeleteDocument/${id}`)
      .then(() => {
        console.log('Document deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting document:', error);
      });
  };

  const handleRefresh = () => {
    fetchDocuments();
    // Fetch documents again to update the list
  };

  return (
    <section className="admin-print-queue">
      <div className='title'>
        <div>
          <h2>Print Queue Management </h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faRefresh} size='1x' onClick={handleRefresh} className='refresh-logo' />
        </div>

      </div>

      <ul>
        {documents.length > 0 ? (
          documents.map((document, index) => (
            <li key={index}>
              {/* Display document information */}
              <div className='files'>
                <div className='user-info'>
                  <h1 className='h1style'><span><FontAwesomeIcon icon={faUser} /></span>Uploaded by : {document.username}</h1>
                  <h3 className='h3style'><span>Upload Time : </span>{formatUploadTime(document.uploadTime)}</h3>
                </div>
                <div className='file-info'>
                  <span><strong>{document.filename}</strong></span>
                  <button onClick={() => previewDocument(document.filename)}><FontAwesomeIcon icon={faEye} size='1x' /></button>
                  <button onClick={() => printDocument(document.filename)}><FontAwesomeIcon icon={faPrint} size='1x' /></button>
                  <button onClick={() => handleDeleteDocument(document._id)}>
                    <FontAwesomeIcon icon={faTrash} size='1x' />
                  </button>
                </div>
              </div>


            </li>
          ))
        ) : (
          <p>No document uploaded</p>
        )}
      </ul>


    </section>
  );
};

export default PrintQueue;
