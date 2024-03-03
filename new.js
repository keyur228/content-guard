function uploadFile2() {
  var fileInput = document.getElementById('fileUpload2');
  var uploadButton = document.getElementById('uploadButton2');
  var statusElement = document.getElementById('status2');

  if ('files' in fileInput && fileInput.files.length > 0) {
    var file = fileInput.files[0];
    var fileType = getFileType(file.name);

    if (fileType) {
      // Disable upload button during processing
      uploadButton.disabled = true;
      uploadButton.innerHTML = 'Processing...';
      
      // Simulate sending file for detection and reporting
      statusElement.textContent = 'File uploaded successfully. Sending for detection and reporting...';
      setTimeout(function() {
        statusElement.textContent = 'Detection and reporting completed. Results will be sent to your email.';
        uploadButton.disabled = false;
        uploadButton.innerHTML = 'Upload';
      }, 3000);
    } else {
      statusElement.textContent = 'Invalid file type. Please upload a supported file.';
    }
  } else {
    statusElement.textContent = 'No file selected. Please select a file to upload.';
  }
}

// getFileType function remains the same
