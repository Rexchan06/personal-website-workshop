// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});

// Contact form email handler
function sendEmail(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    
    // Create structured email
    const subject = `New Contact Form Submission from ${name}`;
    const body = `Hi Ashton,

You have received a new message from your website contact form.

Contact Details:
-----------------------------------------------------------------------------------------------
Name: ${name}
Email: ${email}

Message:
-----------------------------------------------------------------------------------------------
${message}

-----------------------------------------------------------------------------------------------

Please reply directly to: ${email}

Best regards,
Your Website Contact Form`;
    
    // Create mailto URL with encoded subject and body
    const mailtoURL = `mailto:ashton01234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoURL;
}