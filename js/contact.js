document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const formFeedback = document.getElementById('form-feedback');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    /**
     * Validates an email address using a regular expression.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if the email is valid, otherwise false.
     */
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    /**
     * Resets all form fields and error messages to their initial state.
     */
    const resetFormState = () => {
        formFeedback.classList.add('hidden');
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');
        nameInput.classList.remove('border-red-500');
        emailInput.classList.remove('border-red-500');
        messageInput.classList.remove('border-red-500');
    };

    /**
     * Handles the form submission event, including validation and user feedback.
     * @param {Event} e - The form submission event.
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        resetFormState();
        submitButton.disabled = true;
        submitButton.classList.add('opacity-50', 'cursor-not-allowed');

        let isValid = true;

        // Validate Name: Must not be empty.
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            nameInput.classList.add('border-red-500');
            isValid = false;
        }

        // Validate Email: Must be a valid email format.
        if (!validateEmail(emailInput.value)) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-red-500');
            isValid = false;
        }

        // Validate Message: Must not be empty.
        if (messageInput.value.trim() === '') {
            messageError.classList.remove('hidden');
            messageInput.classList.add('border-red-500');
            isValid = false;
        }

        if (isValid) {
            formFeedback.textContent = 'Thank you for your message! We will get back to you soon.';
            formFeedback.classList.remove('hidden', 'bg-red-100', 'text-red-800');
            formFeedback.classList.add('bg-green-100', 'text-green-800');
            contactForm.reset();
            // Button remains disabled on success to prevent resubmission.
            // It will be re-enabled if the user types in the form again (optional enhancement).
        } else {
            formFeedback.textContent = 'Please correct the errors below.';
            formFeedback.classList.remove('hidden', 'bg-green-100', 'text-green-800');
            formFeedback.classList.add('bg-red-100', 'text-red-800');
            submitButton.disabled = false; // Re-enable button if validation fails
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    });
});
