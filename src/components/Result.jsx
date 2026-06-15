import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Results.css';

const Results = () => {
  const location = useLocation();
  const results = location.state?.results;

  if (!results) {
    return (
      <div className="results-error full-page">
        <div className="container">
          <div className="error-content">
            <h2>No Results Found</h2>
            <p>Please complete an assessment first to see your results.</p>
            <Link to="/" className="btn btn-primary">Take Assessment</Link>
          </div>
        </div>
      </div>
    );
  }

  const resultEntries = Object.entries(results).sort((a, b) => b[1].percentage - a[1].percentage);
  const topResult = resultEntries[0];
  const otherResults = resultEntries.slice(1);

  return (
    <div className="results full-page">
      {/* Header Section */}
      <section className="results-hero">
        <div className="container">
          <div className="hero-content">
            <div className="success-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Assessment Complete
            </div>
            <h1 className="hero-title">Your Career Assessment Results</h1>
            <p className="hero-description">
              Based on your unique responses, here are your personalized career recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Top Recommendation */}
      <section className="top-recommendation">
        <div className="container">
          <div className="recommendation-card">
            <div className="top-badge">
              <span className="badge-icon">🏆</span>
              Best Match For You
            </div>
            
            <div className="recommendation-header">
              <h2 className="recommendation-title">{topResult[1].title}</h2>
              <div className="match-score">
                <span className="score-value">{topResult[1].percentage}%</span>
                <span className="score-label">Match</span>
              </div>
            </div>

            <div className="percentage-bar">
              <div
                className="percentage-fill"
                style={{ width: `${topResult[1].percentage}%` }}
              ></div>
            </div>

            <p className="recommendation-description">{topResult[1].description}</p>

            <div className="recommendation-details">
              <div className="detail-section">
                <h3>🎯 Top Career Options</h3>
                <div className="careers-list">
                  {topResult[1].careers.slice(0, 4).map((career, idx) => (
                    <span key={idx} className="career-tag primary">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h3>📚 Recommended Courses</h3>
                <ul className="courses-list">
                  {topResult[1].courses.map((course, idx) => (
                    <li key={idx} className="course-item">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>🏫 Suggested Colleges</h3>
                <ul className="colleges-list">
                  {topResult[1].colleges.map((college, idx) => (
                    <li key={idx} className="college-item">
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Recommendations */}
      <section className="other-recommendations">
        <div className="container">
          <h2 className="section-title">Other Potential Paths</h2>
          <div className="results-grid">
            {otherResults.map(([key, result]) => (
              <div key={key} className="result-card">
                <h3 className="result-title">{result.title}</h3>
                
                <div className="percentage-section">
                  <div className="percentage-text">
                    <span className="percentage-value">{result.percentage}%</span>
                    <span className="percentage-label">Match</span>
                  </div>
                  <div className="percentage-bar">
                    <div
                      className="percentage-fill"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <p className="result-description">{result.description}</p>

                <div className="careers-list">
                  {result.careers.slice(0, 3).map((career, idx) => (
                    <span key={idx} className="career-tag">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="action-section">
        <div className="container">
          <div className="action-content">
            <h2 className="action-title">Ready to Explore Further?</h2>
            <p className="action-description">
              Take another assessment to discover more career possibilities
            </p>
            <div className="action-buttons">
              <Link to="/" className="btn btn-primary">
                Take Another Assessment
              </Link>
              <Link to={`/assessment/${location.pathname.split('/').pop()}`} className="btn btn-secondary">
                Retake This Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;