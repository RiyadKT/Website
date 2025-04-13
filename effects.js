document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, I'm Riyad ";
    const typingText = document.getElementById("typing-text");
  
    let index = 0;
    const speed = 70; // ms
  
    function type() {
      if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
  
    type();

    // Parallax video scroll
    const video = document.getElementById("hero-video");
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      video.style.transform = `translateX(-50%) translateY(${scrollPosition * 0.5}px)`;
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }
  
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000); // switch every 5 seconds
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const tabs = document.querySelectorAll(".carousel-tabs .tab");
    let current = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
      });
      current = index;
    }
  
    function startCarousel() {
      interval = setInterval(() => {
        const next = (current + 1) % slides.length;
        showSlide(next); // ✅ this now updates tabs too
      }, 5000);
    }
  
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        showSlide(i);
        clearInterval(interval);
        startCarousel();
      });
    });
  
    // Init
    showSlide(current);
    startCarousel();
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
  
        if (itemTop < triggerBottom) {
          item.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // call on load
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll('.dot-wrapper');
    const title = document.getElementById('work-title');
    const desc = document.getElementById('work-description');
    const location = document.getElementById('work-location');
  
    dots.forEach(dot => {
      dot.addEventListener('mouseenter', () => {
        title.textContent = dot.dataset.title;
        desc.textContent = dot.dataset.description;
        location.textContent = dot.dataset.location;
      });
  
      dot.addEventListener('mouseleave', () => {
        title.textContent = "Hover over a dot";
        desc.textContent = "You’ll see details of your experience here.";
        location.textContent = "";
      });
    });
  });
  
  
  