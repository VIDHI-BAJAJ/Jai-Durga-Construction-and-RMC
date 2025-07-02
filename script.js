// header scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
// end header scroll

// hamburger menu toggle
 
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu function
        function closeMobileMenu() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }

     

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
   //   end hamburger menu toggle


// testimonial swiper

  const swiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

// end testimonial swiper

// Customer
 
        // Add click interactions for logos
        const logoItems = document.querySelectorAll('.logo-item');
        
        logoItems.forEach(item => {
            item.addEventListener('click', function() {
                // Add a flash effect on click
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Log which logo was clicked (you can replace this with actual functionality)
                const logoText = this.textContent.trim();
                console.log(`${logoText} logo clicked!`);
            });
            
        });

        // Pause animation on hover
        const carousel = document.querySelector('.logo-carousel');
        const track = document.querySelector('.logo-track');
        
        carousel.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });

        // Optional: Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                // Pause animation temporarily when using arrow keys
                track.style.animationPlayState = 'paused';
                setTimeout(() => {
                    track.style.animationPlayState = 'running';
                }, 2000);
            }
        });
  // End Customer