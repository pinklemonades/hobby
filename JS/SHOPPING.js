// Lightbox functionality
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox on click
document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

// Back to Top button
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Lightbox functionality
document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox on click
document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

// Back to Top button
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight - window.innerHeight * 1.5) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight - window.innerHeight * 1.5) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight - window.innerHeight * 1.5) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight - window.innerHeight * 1.5) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight - window.innerHeight * 1.5) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
<script>
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    // Show the button only near the bottom (e.g. last 800px)
    if (scrollPosition > scrollableHeight - 800) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
</script>
<p>Hello World</p>
// LIGHTBOX FUNCTION
document.querySelectorAll('.lightbox-trigger').forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '10000';

    const img = document.createElement('img');
    img.src = image.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '80%';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 0 25px #fff';

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
