import React, { useState } from 'react';

const FileUploadWithPreview = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  // Function to handle file selection
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <div>
      {/* File input for selecting files */}
      <input type="file" multiple onChange={handleFileSelect} />
      
      {/* Preview section */}
      <div>
        <h3>Selected Files:</h3>
        <ul>
          {/* Display previews for each selected file */}
          {selectedFiles.map((file, index) => (
            <li key={index}>
              {/* Display file name */}
              <strong>{file.name}</strong>
              {/* Display file preview if it's an image */}
              {file.type.startsWith('image/') && (
                <img src={URL.createObjectURL(file)} alt={`Preview of ${file.name}`} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploadWithPreview;
