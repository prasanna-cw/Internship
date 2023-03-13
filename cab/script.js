// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  
  // Get the form inputs
  const pickupLocation = document.querySelector('#pickup-location').value;
  const dropLocation = document.querySelector('#drop-location').value;
  const cabType = document.querySelector('#cab-type').value;
  const pickupDate = document.querySelector('#pickup-date').value;
  const pickupTime = document.querySelector('#pickup-time').value;
  
  // Validate the form inputs
  if (pickupLocation === '' || dropLocation === '' || pickupDate === '' || pickupTime === '') {
    alert('Please fill in all the required fields');
    return;
  }
  
  // Submit the form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  const url = 'server.php'; // replace with your server URL
  const params = `pickupLocation=${pickupLocation}&dropLocation=${dropLocation}&cabType=${cabType}&pickupDate=${pickupDate}&pickupTime=${pickupTime}`;
  
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      alert('Your cab has been booked successfully!');
      form.reset(); // clear the form inputs
    }
  }
  
  xhr.onerror = function() {
    console.log('Error');
  }
  
  xhr.send(params);
});
