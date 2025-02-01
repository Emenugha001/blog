// Function to update the current time in UTC
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTimeUTC').textContent = `${utcTime}`;
  }
  
  // Update the time immediately and every second
  updateUTCTime();
  setInterval(updateUTCTime, 1000);