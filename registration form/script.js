document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", function (e) {
        let valid = true;
        const errors = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        // Validate username (must be at least 4 characters)
        if (usernameInput.value.length < 4) {
            errors.username = "Username must be at least 4 characters";
            valid = false;
        }

        // Validate email using a simple regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            errors.email = "Invalid email address";
            valid = false;
        }

        // Validate password (must be at least 6 characters)
        if (passwordInput.value.length < 6) {
            errors.password = "Password must be at least 6 characters";
            valid = false;
        }

        // Validate password
