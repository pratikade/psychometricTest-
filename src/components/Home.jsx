import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const assessmentCards = [
    {
      id: 'after-10th',
      title: 'After 10th Grade Assessment',
      description: 'Discover your ideal career path after completing 10th grade',
      icon: '🎓',
      color: '#4f46e5'
    },
    {
      id: 'after-12th',
      title: 'After 12th Grade Assessment',
      description: 'Find your perfect career path after completing 12th grade',
      icon: '📚',
      color: '#059669'
    },
    {
      id: 'engineering-branch',
      title: 'Engineering Branch Selection',
      description: 'Find the perfect engineering specialization for your skills',
      icon: '⚙️',
      color: '#7c3aed'
    },
    {
      id: 'after-engineering',
      title: 'Career After Engineering',
      description: 'Discover engineering-related career options',
      icon: '💼',
      color: '#ea580c'
    },
    {
      id: 'engineering-career',
      title: 'Engineering Career Roles',
      description: 'Explore engineering-related career roles',
      icon: '🔧',
      color: '#dc2626'
    },
    {
      id: 'career-after-engineering',
      title: 'Professional Engineering Paths',
      description: 'Discover specialized engineering career paths',
      icon: '🚀',
      color: '#4338ca'
    }
  ];

  return (
    <div className="home full-page">
      {/* Hero Section - Full Screen */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-content">
            <div className="container">
              <div className="hero-text">
                <h1 className="hero-title">
                  Find Your Perfect Career Path
                </h1>
                <p className="hero-description">
                  Take our AI-powered psychometric assessments and discover career options 
                  that match your personality, skills, and interests. Get personalized 
                  recommendations for streams, engineering branches, and professional paths.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-number">6</div>
                    <div className="stat-label">Comprehensive Assessments</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">25</div>
                    <div className="stat-label">Questions Each</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">AI</div>
                    <div className="stat-label">Powered Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments Grid Section */}
      <section className="assessments-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Assessment</h2>
            <p className="section-subtitle">
              Select from our comprehensive range of career assessment tests
            </p>
          </div>
          <div className="assessments-grid">
            {assessmentCards.map((card) => (
              <Link
                key={card.id}
                to={`/assessment/${card.id}`}
                className="assessment-card"
                style={{ '--card-color': card.color }}
              >
                <div className="card-header">
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-badge">AI Powered</div>
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <div className="card-footer">
                  <span className="start-link">
                    Start Assessment 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple steps to discover your ideal career path
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <div className="feature-content">
                <h3 className="feature-title">Take Assessment</h3>
                <p className="feature-description">
                  Complete our carefully designed 25-question assessment that evaluates 
                  your interests, skills, and personality traits.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <div className="feature-content">
                <h3 className="feature-title">Get AI Analysis</h3>
                <p className="feature-description">
                  Our advanced AI algorithm analyzes your responses to provide 
                  accurate career matching with percentage scores.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <div className="feature-content">
                <h3 className="feature-title">Discover Opportunities</h3>
                <p className="feature-description">
                  Receive personalized recommendations for courses, colleges, 
                  and career paths that align with your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Discover Your Career Path?</h2>
            <p className="cta-description">
              Join thousands of students who have found their perfect career match through our assessments
            </p>
            <Link to="/assessment/after-10th" className="btn btn-primary cta-button">
              Start Your Journey Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
