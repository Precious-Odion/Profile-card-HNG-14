🚀 Profile Card — Frontend Wizards Stage 1B

A modern, responsive, and accessible Profile Card component built using semantic HTML, modern CSS, and vanilla JavaScript.
This project was developed as part of the Frontend Wizards Stage 1B assessment and focuses on UI structure, accessibility, and interactive frontend behavior.

⸻

🌐 Live Demo

👉 View Live Project￼
(Replace with your deployed Netlify / Vercel / GitHub Pages link)

⸻

📁 Repository

👉 GitHub Repository￼
(Replace with your repo link)

⸻

✨ Project Overview

This project is a fully functional profile card UI component that demonstrates:
	•	Semantic HTML structure
	•	Responsive layout design
	•	Accessible UI practices
	•	Dynamic JavaScript interactions
	•	Clean and modern visual design

The goal is to build a testable, production-like component that passes automated checks while still delivering a polished user experience.

⸻

🎯 Features

👤 Profile Section
	•	User avatar with accessible alt text
	•	Display name with semantic heading
	•	Role badge for visual identity

📝 Biography
	•	Expandable/collapsible bio (“Read more / Show less”)
	•	Dynamic truncation for cleaner UI
	•	Fully accessible toggle with aria-expanded

⏱️ Live Time Display
	•	Displays epoch time (milliseconds since Unix epoch)
	•	Also shows human-readable local time
	•	Updates dynamically every second
	•	Screen-reader friendly using aria-live

🌐 Social Links
	•	GitHub, Twitter/X, LinkedIn links
	•	Opens in new tab securely using:
	•	target="_blank"
	•	rel="noopener noreferrer"
	•	Fully keyboard navigable

🎨 Theme System
	•	Light/Dark mode toggle
	•	Smooth transitions between themes
	•	Custom SVG-based toggle icon

🧠 User Experience Enhancements
	•	Hover animations
	•	Card tilt interaction
	•	Smooth fade-in on load
	•	Responsive spacing system

⸻

♿ Accessibility Features

This project follows modern accessibility standards:
	•	Proper semantic HTML (article, header, section, nav, figure)
	•	Meaningful image alt text
	•	Keyboard navigable interactive elements
	•	Visible focus states on links and buttons
	•	aria-live for dynamic time updates
	•	aria-expanded for toggle button state

⸻

📱 Responsiveness

The layout is fully responsive across:
	•	📱 Mobile devices (stacked layout)
	•	📟 Tablets (adjusted spacing)
	•	💻 Desktop (two-column layout with avatar alignment)

Built using Flexbox and CSS Grid with a mobile-first approach.

⸻

🧱 Tech Stack
	•	HTML5 (Semantic Markup)
	•	CSS3 (Flexbox + Grid + Custom Variables)
	•	Vanilla JavaScript (DOM manipulation)
	•	No frameworks or libraries used

⸻

⚙️ How It Works

⏱️ Time System
	•	Uses Date.now() for epoch time
	•	Updates every 1000ms using setInterval
	•	Also renders local time using toLocaleTimeString()

📝 Bio Toggle
	•	Stores full biography text
	•	Dynamically truncates for preview
	•	Expands/collapses on button click

🌗 Theme Toggle
	•	Toggles .light class on body
	•	Switches SVG icons dynamically
	•	Smooth UI transitions applied globally

⸻

🧪 Testing Requirements Compliance

All required data-testid attributes are implemented:
	•	test-profile-card
	•	test-user-name
	•	test-user-bio
	•	test-user-time
	•	test-user-avatar
	•	test-user-social-links
	•	test-user-social-twitter
	•	test-user-social-github
	•	test-user-social-linkedin
	•	test-user-hobbies
	•	test-user-dislikes

✔ Fully compatible with automated test validation

⸻

🧠 Key Learning Highlights
	•	Building accessible UI components
	•	Managing dynamic DOM updates in vanilla JS
	•	Implementing theme switching without frameworks
	•	Structuring semantic, testable HTML
	•	Creating responsive layouts with CSS Grid/Flexbox
	•	Writing production-style frontend code without libraries

⸻

🚀 Future Improvements
	•	Add persistent theme storage (localStorage)
	•	Add animated skeleton loading state
	•	Improve avatar upload feature with drag & drop
	•	Add micro-interactions for social links
	•	Convert into reusable component library

⸻

👨‍💻 Author

Frontend Developer & Web3 Enthusiast
Focused on building clean UI systems, decentralized applications, and interactive web experiences.

⸻

📌 Notes
	•	Built strictly using HTML, CSS, and Vanilla JavaScript
	•	Fully compliant with assignment constraints
	•	Focused on accessibility, responsiveness, and clean UI structure
