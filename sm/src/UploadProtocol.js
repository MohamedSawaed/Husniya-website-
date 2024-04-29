// src/components/Admin/UploadProtocol.js

import React, { useState } from 'react';
import axios from 'axios'; // Using Axios for HTTP requests

const UploadProtocol = () => {
  const [file, setFile] = useState(null); // File to upload
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [uploadStatus, setUploadStatus] = useState(''); // Status of the upload

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData(); // Form data for file upload
    formData.append('protocol', file); // Append the selected file

    try {
      setIsLoading(true); // Indicate that the upload is in progress
      const response = await axios.post('/api/upload-protocol', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploadStatus('File uploaded successfully.'); // Indicate success
      setFile(null); // Reset the file
    } catch (error) {
      setUploadStatus('Failed to upload file.'); // Indicate failure
    } finally {
      setIsLoading(false); // Stop indicating loading
    }
  };

  return (
    <div>
      <h2>Upload a Protocol</h2>
      <input
        type="file"
        accept="application/pdf" // Restrict to PDF files
        onChange={handleFileChange} // Handle file change
      />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? 'Uploading...' : 'Upload'}
      </button>
      <p>{uploadStatus}</p> {/* Display upload status */}
    </div>
  );
};

export default UploadProtocol;
