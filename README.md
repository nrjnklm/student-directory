🎓 Student Directory Portal

A modern React + Vite web app that displays a student directory with reusable components, statistics, and categorized student groups (Active & Alumni). Designed with clean UI, responsive layout, and modular code structure.

🚀 Live Demo

🔗 Live Website: https://silver-paprenjak-13f43a.netlify.app

(Deployed on Netlify)

📦 GitHub Repository

🔗 Repo: https://github.com/nrjnklm/student-directory

📘 Overview

This app demonstrates essential React concepts such as:

 - Reusable components (StudentCard)

 - Rendering lists with .map()

 - Nested mapping for skill sets

 - Conditional rendering (Active / Alumni status)

 - Computing statistics using React state &  useMemo

 -   Clean, mobile-friendly UI

It organizes students into two categories:

 - Active Students

 - Alumni

The interface also shows:

 - Total students

 - Count of active students

 - Count of alumni

 - Most common skill

🧩 Project Structure
src/
 ├── components/
 │    ├── StudentCard.jsx
 │    └── StudentCard.css
 ├── data/
 │    └── students.js
 ├── App.jsx
 ├── index.css
 ├── main.jsx
public/
vite.config.js
package.json

🧱 Components
1. StudentCard.jsx

Reusable card component that displays:

 - Name

 - Roll number

 - Status badge

 - List of skills

 - Avatar / emoji

2. App.jsx

Main application:

 - Imports student data

 - Calculates statistics

 - Renders student lists

 - Displays summary cards

3. students.js

Holds data arrays:

 - activeStudents

 - alumni

🛠 How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/nrjnklm/student-directory.git

2️⃣ Navigate into the project
cd student-directory

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev


Your app will run on:

👉 http://localhost:5173/

🌐 Deployment

Deployed using Netlify.

To deploy your own version:

1. Push project to GitHub

2. Go to Netlify → Add New Site

3. Choose Deploy from GitHub

4. Select your repo

5. Build command:
npm run build


6. Publish directory:
dist

✨ Credits

Made by Niranjan
Full Stack Development Batch — 2025