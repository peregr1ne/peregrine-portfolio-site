// simple timeout animation for servicecard
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animation's played only once
      }
    });
  }, { threshold: 0.3 });

  cards.forEach((card) => observer.observe(card));


  // running line services animation
  document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("runningTrack");

  // double content
  track.innerHTML += track.innerHTML;

  let speed = 1; // pixels movement speed per frame
  let x = 0;

  function animate() {
    x -= speed;

    // track width (half of track after doubling)
    const trackWidth = track.scrollWidth / 2;

    if (-x >= trackWidth) {
      x = 0; // nearly smooth reset
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
