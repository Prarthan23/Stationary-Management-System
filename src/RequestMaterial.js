// import React, { useState } from 'react';
// import axios from 'axios';
// import './requestmaterial.css';

// const RequestMaterial = () => {
//   const [material, setMaterial] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [college, setCollege] = useState('');
//   const [branch, setBranch] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleMaterialRequest = (e) => {
//     e.preventDefault();
//     if (!material || !studentName || !college || !branch || !phoneNumber) {
//     alert('Please fill in all fields');
//     return; // Prevent form submission if any field is empty
//   }
//     const requestData = {
//       material,
//       studentName,
//       college,
//       branch,
//       phoneNumber
//     };
//     axios.post('http://localhost:3001/MaterialRequest', requestData)
//     .then(response => {
//       if (response.data.message === 'Material request submitted successfully') {
//         // If the request was successful, display an alert
//         // alert('Material request submitted successfully');
//         // Clear form fields
//         setMaterial('');
//         setStudentName('');
//         setCollege('');
//         setBranch('');
//         setPhoneNumber('');
//       } else {
//         // If the request was not successful, display an error alert
//         alert('Error: ' + response.data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error submitting material request:', error);
//       // Optionally, you can display an error message to the user
//     }); // For testing, replace with API call
//   };

//   return (
//     <div className="material-request-container">
        
//       <h2>Request Materials</h2>
//       <form onSubmit={handleMaterialRequest}>
//         <input type="text" value={material} placeholder="Material Name" onChange={(e) => setMaterial(e.target.value)} />
//         <input type="text" value={studentName} placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} />
//         <input type="text" value={college} placeholder="College" onChange={(e) => setCollege(e.target.value)} />
//         <input type="text" value={branch} placeholder="Branch" onChange={(e) => setBranch(e.target.value)} />
//         <input type="tel" value={phoneNumber} placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
//         <button type="submit">Submit Request</button>
//       </form>
//     </div>
//   );
// };

// export default RequestMaterial;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './requestmaterial.css';

// const RequestMaterial = () => {
//   const [material, setMaterial] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [college, setCollege] = useState('');
//   const [branch, setBranch] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [requestSubmitted, setRequestSubmitted] = useState(false);
//   const [branchOptions, setBranchOptions] = useState([]);

//   const handleMaterialRequest = (e) => {
//     e.preventDefault();
//     if (!material || !studentName || !college || !branch || !phoneNumber) {
//       alert('Please fill in all fields');
//       return; // Prevent form submission if any field is empty
//     }

//     // Optionally, you can add phone number format validation here

//     const requestData = {
//       material,
//       studentName,
//       college,
//       branch,
//       phoneNumber,
      
//     };

//     axios.post('http://localhost:3001/MaterialRequest', requestData)
//       .then(response => {
//         if (response.data.message === 'Material request submitted successfully') {
//           // If the request was successful, display an alert
//           alert('Material request submitted successfully');
//           // Clear form fields
//           setMaterial('');
//           setStudentName('');
//           setCollege('');
//           setBranch('');
//           setPhoneNumber('');
//           setRequestSubmitted(true);
//         } else {
//           // If the request was not successful, display an error alert
//           alert('Error: ' + response.data.message);
//         }
//       })
//       .catch(error => {
//         console.error('Error submitting material request:', error);
//         // Display an error message to the user
//         alert('Error submitting material request. Please try again later.');
//       });
//   };
  
//   const handleReset = () => {
//     setMaterial('');
//     setStudentName('');
//     setCollege('');
//     setBranch('');
//     setPhoneNumber('');
//     setRequestSubmitted(false);
//   };
//   const handleCollegeChange = (e) => {
//     const selectedCollege = e.target.value;
//     setCollege(selectedCollege);

//     // Update branch options based on the selected college
//     if (selectedCollege === 'SPCE') {
//       setBranchOptions(['Computer Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering', 'Computer Science']);
//     } else {
//       // Handle other college options here
//       // Example:
//       // setBranchOptions(['Branch 1', 'Branch 2', 'Branch 3']);
//     }
//   };

//   return (
//     <div className="material-request-container">
//       <h2>Request Materials</h2>
//       <form onSubmit={handleMaterialRequest}>
//         <input type="text" value={material} placeholder="Material Name" onChange={(e) => setMaterial(e.target.value)} />
//         <input type="text" value={studentName} placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} />
//         <select value={college} onChange={(e) => setCollege(e.target.value)}>
//         <option value="">Select College</option>
//         <option value="SPCE">SPCE</option>
//         <option value="SPCP">SPCP</option>
//         <option value="SPCAM">SPCAM</option>
//         <option value="SPCC">SPCC</option>
//         <option value="SPCC">SPIAS</option>
//   {/* Add more options as needed */}
// </select>
// <select value={branch} onChange={(e) => setBranch(e.target.value)}>
//   <option value="">Select Branch</option>
//   <option value="Branch A">Branch A</option>
//   <option value="Branch B">Branch B</option>
//   <option value="Branch C">Branch C</option>
//   {/* Add more options as needed */}
// </select>
//         <input type="tel" value={phoneNumber} placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
//         <button className='requestform-btn' type="submit">Submit Request</button>
//       </form>
//     </div>
//   );
// };

// export default RequestMaterial;
import React, { useState } from 'react';
import axios from 'axios';
import './requestmaterial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookAtlas, faBookBookmark, faBookOpenReader, faBookReader } from '@fortawesome/free-solid-svg-icons';

const RequestMaterial = () => {
  const [material, setMaterial] = useState('');
  const [studentName, setStudentName] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [branchOptions, setBranchOptions] = useState([]);

  const handleMaterialRequest = (e) => {
    e.preventDefault();
    if (!material || !studentName || !college || !branch || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    const requestData = {
      material,
      studentName,
      college,
      branch,
      phoneNumber,
    };

    axios.post('http://localhost:3001/MaterialRequest', requestData)
      .then(response => {
        if (response.data.message === 'Material request submitted successfully') {
          alert('Material request submitted successfully');
          setMaterial('');
          setStudentName('');
          setBranch('');
          setPhoneNumber('');
          setRequestSubmitted(true);
        } else {
          alert('Error: ' + response.data.message);
        }
      })
      .catch(error => {
        console.error('Error submitting material request:', error);
        alert('Error submitting material request. Please try again later.');
      });
  };
  
  const handleReset = () => {
    setMaterial('');
    setStudentName('');
    setBranch('');
    setPhoneNumber('');
    setRequestSubmitted(false);
  };
  
  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setCollege(selectedCollege);

    if (selectedCollege === 'SPCE') {
      setBranchOptions(['Computer Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering', 'Computer Science']);
    } else if (selectedCollege === 'SPCP') {
      setBranchOptions(['Branch 1', 'Branch 2', 'Branch 3']);
    } else {
      setBranchOptions([]); // Clear branch options for other colleges
    }
  };

  return (
    <div className="material-request-container">
      <h2><FontAwesomeIcon icon={faBook} size="1x" color='navy' /> Request Materials</h2>
      <form onSubmit={handleMaterialRequest}>
        <input type="text" value={material} placeholder="Material Name" onChange={(e) => setMaterial(e.target.value)} />
        <input type="text" value={studentName} placeholder="Student Name" onChange={(e) => setStudentName(e.target.value)} />
        <select value={college} onChange={handleCollegeChange}>
          <option value="">--Select College--</option>
          <option value="SPCE">SPCE</option>
          <option value="SPCP">SPCP</option>
          {/* Add more college options as needed */}
        </select>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="">Select Branch</option>
          {branchOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <input type="tel" value={phoneNumber} placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
        <button className='requestform-btn' type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestMaterial;
