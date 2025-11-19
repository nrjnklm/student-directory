import React from "react";
import "./StudentCard.css"; // Optional: only if you create a CSS file

export default function StudentCard({
  name,
  rollNumber,
  course,
  email,
  skills,
  isActive,
}) {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <h3 className="student-name">{name}</h3>

        <span className={`status-badge ${isActive ? "active" : "inactive"}`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p><strong>Roll Number:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> {email}</p>

      <div className="skills-section">
        <strong>Skills:</strong>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
