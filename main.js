document.addEventListener('DOMContentLoaded', function() {
    // Text animation code
    const text = "Let us show you how we unleash knowledge unlimited power";
    const element = document.getElementById('animated-text');
    
    if (element) {
        element.innerHTML = '';
        
        const baseDuration = 500;
        const charDelay = 40;
        const wordDelay = 120;
        
        const words = text.split(' ');
        
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'inline-block mx-1 md:mx-2 whitespace-nowrap';
            
            Array.from(word).forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'inline-block opacity-0 translate-y-10 rotate-5 scale-50';
                charSpan.textContent = char;
                charSpan.style.transition = `all ${baseDuration}ms cubic-bezier(0.68,-0.55,0.265,1.55)`;
                charSpan.style.transitionDelay = `${(wordIndex * wordDelay) + (charIndex * charDelay)}ms`;
                wordSpan.appendChild(charSpan);
                
                setTimeout(() => {
                    charSpan.classList.add(
                        'opacity-100',
                        'translate-y-0',
                        'rotate-0',
                        'scale-100'
                    );
                }, (wordIndex * wordDelay) + (charIndex * charDelay));
            });
            
            element.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });

        setInterval(() => {
            element.style.animation = 'none';
            void element.offsetWidth;
            element.style.animation = 'shake 0.8s ease-in-out';
        }, 5000);
    }

    // Contact form modal code
    const modal = document.getElementById('contact-modal');
    const trigger = document.getElementById('contact-modal-trigger');
    const closeBtn = document.getElementById('close-modal');
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const closeSuccessBtn = document.getElementById('close-success');

    // Open modal
    if (trigger) {
        trigger.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        if (form) {
            form.classList.remove('hidden');
            form.reset();
        }
        if (successMessage) {
            successMessage.classList.add('hidden');
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
        });
    }
});

// Master Technologies "View All" button functionality
const viewAllBtn = document.getElementById('view-all-btn');
const expandedTechSection = document.getElementById('expanded-tech');

if (viewAllBtn && expandedTechSection) {
    let isExpanded = false;

    viewAllBtn.addEventListener('click', () => {
        if (!isExpanded) {
            // Expand the section
            expandedTechSection.classList.remove('h-0', 'opacity-0');
            expandedTechSection.classList.add('h-auto', 'opacity-100', 'grid');
            viewAllBtn.textContent = 'View Less';
            isExpanded = true;
        } else {
            // Collapse the section
            expandedTechSection.classList.remove('h-auto', 'opacity-100', 'grid');
            expandedTechSection.classList.add('h-0', 'opacity-0');
            viewAllBtn.textContent = 'View All Technologies';
            isExpanded = false;
        }
    });
}

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the menu's visibility
        mobileMenu.classList.toggle('-translate-x-full');

        // Check if the menu is visible and change the button's content
        if (mobileMenu.classList.contains('-translate-x-full')) {
            mobileMenuBtn.innerHTML = '&#8801;'; // Change to menu icon
        } else {
            mobileMenuBtn.innerHTML = '&times;'; // Change to cross icon
        }
    });
}