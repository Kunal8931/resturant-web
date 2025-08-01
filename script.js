

const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const phoneInput = document.getElementById('phone').value.trim();
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phoneInput)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Show confirmation dialog
  alert(`Thank you, ${document.getElementById('name').value.trim()}! Your reservation is confirmed.`);

  // Reset form
  reservationForm.reset();
});
