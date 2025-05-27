
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Show loading spinner
      form.querySelector('.loading').classList.add('d-block');
      form.querySelector('.error-message').classList.remove('d-block');
      form.querySelector('.sent-message').classList.remove('d-block');

      // Get input values
      const name = encodeURIComponent(form.querySelector('input[name="name"]').value);
      const email = encodeURIComponent(form.querySelector('input[name="email"]').value);
      const subject = encodeURIComponent(form.querySelector('input[name="subject"]').value);
      const message = encodeURIComponent(form.querySelector('textarea[name="message"]').value);

      // Construct body and URL
      const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@gmail.com&su=${subject}&body=${body}`;

      // Hide loading spinner and show success message
      form.querySelector('.loading').classList.remove('d-block');
      form.querySelector('.sent-message').innerHTML = "Redirecting to Gmail...";
      form.querySelector('.sent-message').classList.add('d-block');

      // Delay briefly then open Gmail
      setTimeout(() => {
        window.open(gmailURL, '_blank');
        form.reset();
      }, 500);
    });
  });
})();

