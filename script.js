const timeEl = document.querySelector('[data-testid="test-user-time"]');
const readableEl = document.getElementById('readable-time');

function updateTime() {
  const now = Date.now();

  // Required (for tests)
  timeEl.textContent = now;

  // Human-readable time
  const date = new Date();

  readableEl.textContent = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
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

function setDarkIcon() {
  themeToggle.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#38bdf8">
    <path d="M12 2a9.93 9.93 0 0 0-2 .2 10 10 0 1 0 9.8 13.8A8 8 0 0 1 12 2z"/>
  </svg>`;
}

function setLightIcon() {
  themeToggle.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#facc15">
    <circle cx="12" cy="12" r="5"/>
    <g stroke="#facc15" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
    </g>
  </svg>`;
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    setLightIcon();
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  } else {
    setDarkIcon();
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  }
});

// Set default icon on load
setDarkIcon();