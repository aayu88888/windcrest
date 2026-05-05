// ============================================================
// script.js — Windcrest Website JavaScript
// Sections:
// 1. Smooth Scrolling (navbar links)
// 2. Plan Selection Buttons
// 3. Contact Form Submission
// ============================================================


document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // 1. SMOOTH SCROLLING
    // Intercepts nav link clicks and smoothly scrolls to sections
    // ============================================================
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // ============================================================
    // 2. PLAN SELECTION BUTTONS
    // When a plan button is clicked:
    //   - Shows an alert with the selected plan name
    //   - Smoothly scrolls down to the Contact section
    //   - Auto-selects the matching plan in the dropdown
    // ============================================================
    document.querySelectorAll('.btn-select').forEach(button => {
        button.addEventListener('click', function () {
            const planName = this.innerText.replace('Select ', '');

            alert('You have selected the ' + planName + '! We will be in touch soon.');

            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });

                // Auto-select the plan in the dropdown
                const planInterest = document.getElementById('plan-interest');
                if (planInterest) {
                    let value = planName.toLowerCase().replace(' plan', '');
                    if (value === 'basic') value = 'basic';
                    else if (value === 'pro') value = 'pro';
                    else if (value === 'pro max') value = 'pro-max';
                    planInterest.value = value;
                }
            }
        });
    });


    // ============================================================
    // 3. CONTACT FORM SUBMISSION
    // Prevents default form submission (no backend yet),
    // shows a thank-you message, and resets the form fields.
    // NOTE: Connect to a backend (Node.js/Express) or a service
    // like EmailJS / Formspree to actually send emails.
    // ============================================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // ===============================================================
    // 4.CURSOR MOVEMENT
    // As the cursor hovers arounf the website a blue dot follows up
    // ===============================================================

    const dot = document.getElementById('cursor-dot');

    document.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
    });

}); // End DOMContentLoaded
