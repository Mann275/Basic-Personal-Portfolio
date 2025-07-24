// ==========================================
// PORTFOLIO NAVIGATION FUNCTIONALITY
// ==========================================

// Tab switching functionality for About section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
function opentab(tabname) {
    // Remove active class from all tab links and contents
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");    
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to clicked tab and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
var sidemenu = document.getElementById("sidemenu");

function openMenu() {
    sidemenu.style.right = "0";
}

function closeMenu() {
    sidemenu.style.right = "-200px";
}

// ==========================================
// CONTACT FORM FUNCTIONALITY WITH EMAILJS
// ==========================================

// Initialize EmailJS
(function() {
    emailjs.init("aYHsccMGqYR5Axf8L");
})();

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const msgElement = document.getElementById('msg');

    if (contactForm && msgElement) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading message
            msgElement.innerHTML = "📧 Sending message...";
            msgElement.className = "loading";
            msgElement.style.display = "block";
            msgElement.style.visibility = "visible";
            
            // Send email using EmailJS
            emailjs.sendForm('service_8tqrvxm', 'template_1wgf29f', this)
                .then(function(response) {
                    // Show success message
                    msgElement.innerHTML = "✅ Message sent successfully! I'll get back to you soon.";
                    msgElement.className = "success";
                    contactForm.reset();
                    
                    // Clear message after 4 seconds
                    setTimeout(function() {
                        msgElement.innerHTML = "";
                        msgElement.className = "";
                        msgElement.style.display = "none";
                    }, 4000);
                })
                .catch(function(error) {
                    // Show error message
                    msgElement.innerHTML = "❌ Failed to send message. Please try again.";
                    msgElement.className = "error";
                    
                    // Clear message after 4 seconds
                    setTimeout(function() {
                        msgElement.innerHTML = "";
                        msgElement.className = "";
                        msgElement.style.display = "none";
                    }, 4000);
                });
        });
    }
});

