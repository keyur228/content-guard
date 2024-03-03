function uploadFile() {
    var fileInput = document.getElementById('fileUpload');
    var statusElement = document.getElementById('status');
  
    if ('files' in fileInput && fileInput.files.length > 0) {
      var file = fileInput.files[0];
      var fileType = getFileType(file.name);
  
      if (fileType) {
        // Check for inappropriate content based on file type
        // Example: send file to server for analysis
        statusElement.textContent = 'File uploaded successfully. Analyzing for inappropriate content...';
      } else {
        statusElement.textContent = 'Invalid file type. Please upload a supported file.';
      }
    } else {
      statusElement.textContent = 'No file selected. Please select a file to upload.';
    }
  }
  
  function getFileType(fileName) {
    var supportedTypes = ['.txt', '.pdf', '.doc', '.docx', '.png', '.jpg', '.mp4', '.mp3'];
    var extension = fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    return supportedTypes.includes('.' + extension);
  }
  