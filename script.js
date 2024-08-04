document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

        // Validate Email
        const email = document.getElementById('email').value;
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (!password) {
            document.getElementById('passwordError').textContent = 'Password is required.';
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        // Validate First Name
        const firstName = document.getElementById('first-name').value;
        if (!firstName) {
            document.getElementById('firstNameError').textContent = 'First name is required.';
            isValid = false;
        }

        // Validate Last Name
        const lastName = document.getElementById('last-name').value;
        if (!lastName) {
            document.getElementById('lastNameError').textContent = 'Last name is required.';
            isValid = false;
        }

        // Validate Date of Birth
        const dob = document.getElementById('dob').value;
        if (!dob) {
            document.getElementById('dobError').textContent = 'Date of Birth is required.';
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (!phone) {
            document.getElementById('phoneError').textContent = 'Phone number is required.';
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
            isValid = false;
        }

        // Validate Roll Number
        const rollNumber = document.getElementById('roll-number').value;
        if (!rollNumber) {
            document.getElementById('rollNumberError').textContent = 'Roll number is required.';
            isValid = false;
        }

        // Validate Branch
        const branch = document.getElementById('branch').value;
        if (!branch) {
            document.getElementById('branchError').textContent = 'Branch is required.';
            isValid = false;
        }

        // Validate Year of Passing
        const year = document.getElementById('year').value;
        if (!year) {
            document.getElementById('yearError').textContent = 'Year of passing is required.';
            isValid = false;
        } else if (year < 1900 || year > 2099) {
            document.getElementById('yearError').textContent = 'Year must be between 1900 and 2099.';
            isValid = false;
        }

        // Validate Languages Spoken
        const languages = document.getElementById('languages').value;
        if (!languages) {
            document.getElementById('languagesError').textContent = 'Languages spoken are required.';
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
