# Student Directory Portal

A React app showcasing a student directory with reusable components, nested lists, and conditional rendering, built with Vite.

## Live demo
- **Live Website:** (paste your deployment link here after deploying)

## GitHub
- **Repository:** (paste your GitHub repo link here)

## Description
This app displays a list of students split into two groups (Active Students and Alumni) using a reusable `StudentCard` component. The app demonstrates:

- Component composition in React
- `map()` usage to render lists and nested skills
- Conditional rendering for Active / Inactive badges
- Basic styling and responsive layout

## Components
- `StudentCard.jsx` — Reusable component displaying student information and rendering the `skills` array with `map()`.
- `App.jsx` — Main application: loads student data, calculates directory statistics, and renders student lists.
- `data/students.js` — Contains two arrays: `activeStudents` and `alumni`.

## How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/nrjnklm/student-directory.git
   cd student-directory-2025
