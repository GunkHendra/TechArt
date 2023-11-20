function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailValue = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'Email is required!';
        emailInput.classList.add('error-input');
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Invalid email address!';
        emailInput.classList.add('error-input');
        return false;
    } else {
        const form = document.getElementById("validations");
        const defined = document.getElementById("defined");
        const subs = document.getElementById("true");

        form.style.display = "none";
        defined.style.display = "none";
        subs.style.display = "block";

        return false;
    }
}