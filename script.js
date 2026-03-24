document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FAQ Accordion Logic
    //  This will toggle answers when you click on the fake boxes.
    const faqBoxes = document.querySelectorAll('.faqbox');

    faqBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Check if it's already open.
            const isOpen = box.classList.contains('active');
            
            //  Check all the boxes first (professional behavior)
            faqBoxes.forEach(otherBox => {
                otherBox.classList.remove('active');
                otherBox.querySelector('svg').style.transform = 'rotate(0deg)';
                //  Hide the answer div if you created it.
            });

            //  If the clicked box was closed, open it
            if (!isOpen) {
                box.classList.add('active');
                box.querySelector('svg').style.transform = 'rotate(45deg)'; // Plus ko Cross banayein
                console.log("FAQ Opened: ", box.innerText);
            }
        });
    });

    // 2. Email Validation for Hero Section
    const getStartedBtn = document.querySelector('.btn-red');
    const emailInput = document.querySelector('.hero-buttons input');

    getStartedBtn.addEventListener('click', (e) => {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            alert("Please enter your email address to get started!");
            emailInput.style.border = "2px solid red";
        } else if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            emailInput.style.border = "2px solid red";
        } else {
            emailInput.style.border = "2px solid green";
            alert("Welcome! Redirecting you to the membership page...");
            //  Here you can redirect by using window.location.href
        }
    });

    // 3. Navbar Background Change on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0, 0, 0, 0.95)";
            nav.style.transition = "0.4s";
        } else {
            nav.style.background = "transparent";
        }
    });

    // 4. Smooth Scrolling for Footer Links
    document.querySelectorAll('.footer a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Navigating to: " + this.getAttribute('href'));
        });
    });
});