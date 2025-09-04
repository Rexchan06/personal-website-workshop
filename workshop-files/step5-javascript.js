/* STEP 5: JAVASCRIPT FUNCTIONALITY */
/* Add this JavaScript to your CodePen JS panel to make the website fully interactive! */

/* ===== MOBILE HAMBURGER MENU ===== */
/* Students should TYPE these key JavaScript concepts */

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {    /* TYPE THIS: Wait for page load */
    // Get references to the hamburger button and navigation menu
    const hamburger = document.querySelector('.hamburger');   /* TYPE THIS: Find hamburger button */
    const navLinks = document.querySelector('.nav-links');    /* TYPE THIS: Find navigation menu */
    
    // Add click event listener to hamburger button
    hamburger.addEventListener('click', function() {          /* TYPE THIS: Listen for clicks */
        navLinks.classList.toggle('active');                 /* TYPE THIS: Show/hide menu */
    });
    
    // Close mobile menu when clicking on a navigation link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');  // Hide menu after clicking a link
        });
    });
});

/* ===== CONTACT FORM EMAIL HANDLER ===== */
/* Students should TYPE the key form handling concepts */

function sendEmail(event) {
    event.preventDefault();  /* TYPE THIS: Prevents form from submitting normally */
    
    // Get form data - Students should TYPE these concepts
    const form = event.target;           /* TYPE THIS: Get the form element */
    const name = form.name.value;        /* TYPE THIS: Get name input value */
    const email = form.email.value;      /* TYPE THIS: Get email input value */
    const message = form.message.value;  /* TYPE THIS: Get message textarea value */
    
    // Create structured email subject and body
    const subject = `New Contact Form Submission from ${name}`;
    const body = `Hi there,

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
    const mailtoURL = `mailto:[YOUR EMAIL HERE]?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoURL;  /* TYPE THIS: Opens email client */
    
    // Optional: Show success message (students can add this)
    alert('Thank you for your message! Your email client should open now.');
}

/* ===== WHAT STUDENTS LEARNED ===== */
/*
JavaScript concepts introduced in Step 5:
1. addEventListener - how to listen for user interactions
2. querySelector - how to find HTML elements
3. classList.toggle - how to add/remove CSS classes
4. event.preventDefault - how to stop default form behavior
5. Template literals (${variable}) - how to insert variables into strings
6. Form data access - how to get values from input fields
7. forEach loops - how to repeat actions on multiple elements
8. DOM manipulation - how to change webpage content with code
9. Event handling - responding to user clicks and form submissions
10. mailto protocol - opening email clients from web pages

The website is now fully functional with:
- Working mobile navigation menu
- Interactive contact form that opens email client
- Professional design that works on all devices
- Smooth animations and hover effects
*/

/* ===== BONUS: SKILL PROGRESS BAR ANIMATION ===== */
/* This is optional - makes skill bars animate when page loads */

// Animate skill progress bars when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Find all progress bars
    const progressBars = document.querySelectorAll('.skill-progress');
    
    // Add a small delay so animation is visible
    setTimeout(() => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 500); // Half-second delay
});

/* ===== WORKSHOP COMPLETE! ===== */
/* 
Students have now built a complete, professional personal portfolio website with:
✅ Semantic HTML structure
✅ Modern CSS styling with flexbox
✅ Interactive hover effects and animations  
✅ Mobile-responsive design
✅ Working JavaScript functionality
✅ Contact form integration
✅ Professional visual design

This website is ready to be deployed and used as a real portfolio!
*/