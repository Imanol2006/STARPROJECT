import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src="/star.png" alt="STAR Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/lesson">Lesson Plan</Link></li>
          <li><Link to="/tasks">Calendar</Link></li>
          <li><Link to="/opportunities">Opportunities</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="glow-text">STAR: College Companion</h1>
        <p>Your AI-powered academic co-pilot for smarter study, time, and life.</p>
        <Link to="/login" className="start-btn">🚀 Launch App</Link>
      </header>

      <section className="features" id="features">
        <h2>✨ What You Can Do</h2>
        <div className="feature-grid">
          <Link to="/lesson" className="card clickable">
            <h3>📘 Personalized Lesson Plans</h3>
            <p>AI creates your weekly study plan based on major, style, and goals.</p>
          </Link>
          <Link to="/login" className="card clickable">
            <h3>🧠 Smart Chatbot</h3>
            <p>Type natural messages like “I have a quiz Monday” — it auto-updates your week.</p>
          </Link>
          <Link to="/tasks" className="card clickable">
            <h3>🗓️ Dynamic Calendar</h3>
            <p>Add tasks/events in chat — they show up live in your calendar.</p>
          </Link>
          <Link to="/opportunities" className="card clickable">
            <h3>🌐 Opportunities Feed</h3>
            <p>See internships, events, and jobs personalized to your goals.</p>
          </Link>
        </div>
      </section>

      <footer>
        <p>Made for students, by students. Powered by OpenAI ✨</p>
      </footer>
    </div>
  );
}