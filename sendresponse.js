
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Contact form submitted!');
});


document.getElementById('guest-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const guests = document.getElementById('guests').value;
    if (guests > 0) {
        alert(`You selected ${guests} guest(s).`);
    } else {
        alert('Please enter a valid number of guests.');
    }
});


document.getElementById('date-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);

    if (checkout <= checkin) {
        alert('Check-out date must be after check-in date.');
    } else {
        alert(`Reservation from ${checkin.toDateString()} to ${checkout.toDateString()}`);
    }
});
