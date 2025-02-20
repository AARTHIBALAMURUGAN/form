document.getElementById('registration-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var contact = document.getElementById('contact').value;

	if (firstname === '' || lastname === '' || email === '' || contact === '') {
		document.getElementById('message').innerHTML = 'Please fill in all fields.';
		return;
	}

	if (!validateEmail(email)) {
		document.getElementById('message').innerHTML = 'Invalid email address.';
		return;
	}

	if (!validateContact(contact)) {
		document.getElementById('message').innerHTML = 'Invalid contact number.';
		return;
	}
    document.getElementById('message').innerHTML = 'Registration complete!';
});

function validateEmail(email) {
	var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return re.test(email);
}

function validateContact(contact) {
	var re = /^\d{10}$/;
	return re.test(contact);
}
