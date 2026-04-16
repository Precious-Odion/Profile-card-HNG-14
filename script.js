const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

const card = document.querySelector('[data-testid="test-profile-card"]');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y / rect.height - 0.5) * 6;
  const rotateY = (x / rect.width - 0.5) * 6;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

const bio = document.getElementById("bio");
const toggle = document.getElementById("bio-toggle");

const fullText = bio.textContent;

const shortText =
  "Passionate frontend developer focused on building clean...";

let expanded = false;

bio.textContent = shortText;

toggle.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    bio.textContent = fullText;
    toggle.textContent = "Show less";
    toggle.setAttribute("aria-expanded", "true");
  } else {
    bio.textContent = shortText;
    toggle.textContent = "Read more";
    toggle.setAttribute("aria-expanded", "false");
  }
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "Switch to Dark Mode";
  } else {
    themeToggle.textContent = "Switch to Light Mode";
  }
});
