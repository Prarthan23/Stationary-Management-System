import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEye, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import './documentupload.css';

const DocumentUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from URL
    const params = new URLSearchParams(window.location.search);
    const usernameParam = params.get('username');
    if (usernameParam) {
      setUsername(usernameParam);
    }
  }, []);

  const handleDocumentUpload = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    // Append username to the FormData
    formData.append('username', username);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const data = await response.json();
        alert(`Documents uploaded successfully!`);
        setSelectedFiles([]);
        setShowPreview(false);
        console.log('Documents uploaded successfully:', data);
      } else {
        throw new Error('Failed to upload documents');
      }
    } catch (error) {
      console.error('Error uploading documents:', error);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    setPreviewFile(null); // Clear preview when file is deleted
  };

  const handleFileSelect = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
    setShowPreview(false);
  };

  const handlePreviewToggle = () => {
    setShowPreview(!showPreview);
  };

  const handleFilePreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewFile({
        data: reader.result,
        type: file.type
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClosePreview = () => {
    setPreviewFile(null);
  };

  return (
    <div className='doc-container'>
      <div className="document-upload">
        <h2><FontAwesomeIcon icon={faUpload} size="1x" color='navy' /> Upload Documents</h2>
        <form onSubmit={handleDocumentUpload}>
          <input type="file" multiple onChange={handleFileSelect} />
          <div className='guide'>
            <p>You can upload pdf file, word file, ppt, image and many other files</p>
          </div>
          <button type="submit">Upload</button>
          <button type="button" onClick={handlePreviewToggle}>Preview</button>
        </form>
        <p className='identity'>DOCVERSE</p>
      </div>
      <div className='preview-container'>
        {showPreview && (
          <div className="file-preview-container">
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  <span>{file.name}</span>
                  <button className="preview-btn" onClick={() => handleFilePreview(file)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="file-delete-btn" onClick={() => handleDeleteFile(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='indv-prew'>
        {previewFile && (
          <div className="file-preview-container">
            <h3>File Preview:</h3>
            <button className="close-preview-btn" onClick={handleClosePreview}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>Uploaded by: {username}</p>
            <div className="preview-content">
              {previewFile.type && previewFile.type.startsWith('image/') ? (
                <img src={previewFile.data} alt="Preview" />
              ) : (
                <embed src={previewFile.data} type="application/pdf" width="100%" height="600px" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;





// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
// import './documentupload.css';

// const DocumentUpload = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [showPreview, setShowPreview] = useState(false);
//   const [previewFile, setPreviewFile] = useState(null);

//   const handleDocumentUpload = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append('files', selectedFiles[i]);
//     }

//     try {
//       const response = await fetch('http://localhost:3001/upload', {
//         method: 'POST',
//         body: formData
//       });
//       if (response.ok) {
//         const data = await response.json();
//         alert(`Documents uploaded successfully!`);
//         setSelectedFiles([]);
//         console.log('Documents uploaded successfully:', data);
//       } else {
//         throw new Error('Failed to upload documents');
//       }
//     } catch (error) {
//       console.error('Error uploading documents:', error);
//     }
//   };

//   const handleDeleteFile = (index) => {
//     const updatedFiles = [...selectedFiles];
//     updatedFiles.splice(index, 1);
//     setSelectedFiles(updatedFiles);
//     setPreviewFile(null); // Clear preview when file is deleted
//   };

//   const handleFileSelect = (e) => {
//     setSelectedFiles([...selectedFiles, ...e.target.files]);
//     setShowPreview(false);
//   };

//   const handlePreviewToggle = () => {
//     setShowPreview(!showPreview);
//   };

//   const handleFilePreview = (file) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewFile(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className='doc-container'>
//       <section className="document-upload">
//         <h2><FontAwesomeIcon icon={faUpload} size="1x" color='navy' /> Upload Documents</h2>
//         <form onSubmit={handleDocumentUpload}>
//           <input type="file" multiple onChange={handleFileSelect} />
//           <div className='guide'>
//             <p>You can upload pdf file, word file, ppt, image and many other files</p>
//           </div>
//           <button type="submit">Upload</button>
//           <button type="button" onClick={handlePreviewToggle}>Preview</button>
//         </form>
//         <p className='identity'>DOCVERSE</p>
//       </section>
//       <div className='preview-container'>
//         {showPreview && (
//           <div className="file-preview-container">
//             <h3>Selected Files:</h3>
//             <ul>
//               {selectedFiles.map((file, index) => (
//                 <li key={index}>
//                   <span>{file.name}</span>
//                   <button className="preview-btn" onClick={() => handleFilePreview(file)}>
//                     <FontAwesomeIcon icon={faEye} />
//                   </button>
//                   <button className="file-delete-btn" onClick={() => handleDeleteFile(index)}>
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {previewFile && (
//           <div className="file-preview-container">
//             <h3>File Preview:</h3>
//             <div className="preview-content">
//               <img src={previewFile} alt="Preview" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentUpload;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUpload, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
// import './documentupload.css';

// const DocumentUpload = () => {
//   // State variable to store selected files
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [showPreview, setShowPreview] = useState(false);

//   // Function to handle document upload submission
//   const handleDocumentUpload = async (e) => {
    
//     e.preventDefault();
    
//     const fileInput = document.querySelector('input[type="file"]');
//     const files = fileInput.files;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//         formData.append('file', files[i]);
//     }

//     try {
//         const response = await fetch('http://localhost:3001/upload', {
//             method: 'POST',
//             body: formData
//         });
//         if (response.ok) {
//             const data = await response.json();
//             alert(`Document "${data.filename}" uploaded successfully!`);
//             fileInput.value = '';
//             console.log('Documents uploaded successfully:', data);
//             // You can perform additional actions here, such as updating the UI
//         } else {
//             throw new Error('Failed to upload documents');
//         }
//     } catch (error) {
//         console.error('Error uploading documents:', error);
//         // Handle error (e.g., display an error message to the user)
//     }
// };

//   const handleDeleteFile = (index) => {
//     const updatedFiles = [...selectedFiles];
//     updatedFiles.splice(index, 1);
//     setSelectedFiles(updatedFiles);
//   };

//   // Function to handle file selection
//   const handleFileSelect = (e) => {
//     setSelectedFiles([...selectedFiles, ...e.target.files]);
//     setShowPreview(false);
//   };

//   const handlePreviewToggle = () => {
//     setShowPreview(!showPreview);
//   };

//   return (
//     <section className="document-upload">
//       <h2><FontAwesomeIcon icon={faUpload} size="1x" color='navy' /> Upload Documents</h2>
//       <form onSubmit={handleDocumentUpload}>
//         {/* Input field for selecting files */}
//         <input type="file" multiple onChange={handleFileSelect} />
//         <div className='guide'>
//           <p>You can upload pdf file, word file, ppt, image, and many other files</p>
//         </div>
//         {/* Button to submit document upload */}
//         <button type="submit">Upload</button>
//         <button type="button" onClick={handlePreviewToggle}>Preview</button>
//       </form>
//       <p className='identity'>DOCVERSE</p>
//       {showPreview && (
//         <div className="file-preview-container">
//           <h3>Selected Files:</h3>
//           <ul>
//             {selectedFiles.map((file, index) => (
//               <li key={index}>
//                 <span>{file.name}</span>
//                 <button className="preview-btn">
//                   <FontAwesomeIcon icon={faEye} />
//                 </button>
//                 <button className="file-delete-btn" onClick={() => handleDeleteFile(index)}>
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// };

// export default DocumentUpload;

  // Function to handle document upload submission
//   const handleDocumentUpload = async (e) => {
    
//     e.preventDefault();
    
//     const fileInput = document.querySelector('input[type="file"]');
//     const files = fileInput.files;

//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//         formData.append('file', files[i]);
//     }

//     try {
//         const response = await fetch('http://localhost:3001/upload', {
//             method: 'POST',
//             body: formData
//         });
//         if (response.ok) {
//             const data = await response.json();
//             alert(`Document "${data.filename}" uploaded successfully!`);
//             fileInput.value = '';
//             console.log('Documents uploaded successfully:', data);
//             // You can perform additional actions here, such as updating the UI
//         } else {
//             throw new Error('Failed to upload documents');
//         }
//     } catch (error) {
//         console.error('Error uploading documents:', error);
//         // Handle error (e.g., display an error message to the user)
//     }
// };

//   // Function to handle file selection
//   const handleFileSelect = (e) => {
//     setSelectedFiles([...selectedFiles, ...e.target.files]);
//   };