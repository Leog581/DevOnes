document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset feedback
        formFeedback.classList.add('hidden');
        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');
        nameInput.classList.remove('border-red-500');
        emailInput.classList.remove('border-red-500');
        messageInput.classList.remove('border-red-500');

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            nameInput.classList.add('border-red-500');
            isValid = false;
        }

        // Validate email
        if (!validateEmail(emailInput.value)) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-red-500');
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.classList.remove('hidden');
            messageInput.classList.add('border-red-500');
            isValid = false;
        }

        if (isValid) {
            formFeedback.textContent = 'Thank you for your message! We will get back to you soon.';
            formFeedback.classList.remove('hidden');
            formFeedback.classList.add('bg-green-100', 'text-green-800');
            formFeedback.classList.remove('bg-red-100', 'text-red-800');
            contactForm.reset();
        } else {
            formFeedback.textContent = 'Please correct the errors below.';
            formFeedback.classList.remove('hidden');
            formFeedback.classList.add('bg-red-100', 'text-red-800');
            formFeedback.classList.remove('bg-green-100', 'text-green-800');
        }
    });
});
