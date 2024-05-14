import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faRefresh } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './materialrequests.css'

const MaterialRequests = () => {
    const [materialRequests, setMaterialRequests] = useState([]);
    const [error, setError] = useState(null);
    
    const fetchRequest = async ()=>{
      await axios.get('http://localhost:3001/MaterialRequest')
      .then(response => {
        setMaterialRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching material requests:', error);
        // Set an error state to handle the error
        setError('Error fetching material requests');
      });
    }
    useEffect(() => {
        // Fetch material requests data from your backend API
        fetchRequest();
      }, []);
    const handleRefresh=()=>{
      fetchRequest();
    }
      const handleDeleteRequest = (id) => {
        // Remove the request from the frontend
        setMaterialRequests(materialRequests.filter(request => request._id !== id));
    
        // Remove the request from the database
        axios.delete(`http://localhost:3001/MaterialRequest/${id}`)
          .then(() => {
            console.log('Request deleted successfully');
          })
          .catch(error => {
            console.error('Error deleting request:', error);
          });
      };
  return (
    <div className="material-requests">
      <section className="admin-material-requests">
            <h2>Material Requests<span><FontAwesomeIcon icon={faRefresh} size='1x' onClick={handleRefresh}  className='refresh-logo'/></span></h2>
            {materialRequests.length > 0 ? (
              materialRequests.map(request => (
                <div key={request._id} className="material-request">
                  <h3>Request ID: {request._id}</h3>
                  <p><big>Requester: {request.studentName}</big></p>
                  <p>Materials: {request.material}</p>
                  <p>College: {request.college}</p>
                  <p>Branch: {request.branch}</p>
                  <p>Contact No: {request.phoneNumber}</p>
                  <button className="materialrequest-dlt" onClick={() => handleDeleteRequest(request._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))
            ) : (
              <p>No material requests available</p>
            )}
          </section>
    </div>
  );
};

export default MaterialRequests;
