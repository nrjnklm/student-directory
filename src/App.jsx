import React, { useMemo } from 'react'
import StudentCard from './components/studentCard.jsx'
import { activeStudents, alumni } from './data/students'

export default function App() {
  // Stats calculation using useMemo for clarity (not strictly required)
  const stats = useMemo(() => {
    const allStudents = [...activeStudents, ...alumni]
    const total = allStudents.length
    const activeCount = activeStudents.length
    const alumniCount = alumni.length

    // most common skill
    const freq = {}
    allStudents.forEach(student => {
      student.skills.forEach(skill => {
        const key = skill.trim()
        freq[key] = (freq[key] || 0) + 1
      })
    })

    let mostCommonSkill = '—'
    let highest = 0
    Object.entries(freq).forEach(([skill, count]) => {
      if (count > highest) {
        highest = count
        mostCommonSkill = skill
      }
    })

    return { total, activeCount, alumniCount, mostCommonSkill }
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <main>
        <section className="stats">
          <h2>Directory Statistics</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <p className="stat-number">{stats.total}</p>
              <p>Total Students</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">{stats.activeCount}</p>
              <p>Active</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">{stats.alumniCount}</p>
              <p>Alumni</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">{stats.mostCommonSkill}</p>
              <p>Most common skill</p>
            </div>
          </div>
        </section>

        <section className="group-section">
          <h2>Active Students</h2>
          <div className="grid">
            {activeStudents.map((student) => (
              <StudentCard
                key={student.rollNumber}
                {...student}
              />
            ))}
          </div>
        </section>

        <section className="group-section">
          <h2>Alumni</h2>
          <div className="grid">
            {alumni.map((student) => (
              <StudentCard
                key={student.rollNumber}
                {...student}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p><strong>Institution:</strong> Example Institute - Full Stack Development</p>
          <p><strong>Contact:</strong> admin@example-institute.edu</p>
        </div>
        <div>© {new Date().getFullYear()} Student Portal</div>
      </footer>
    </div>
  )
}
