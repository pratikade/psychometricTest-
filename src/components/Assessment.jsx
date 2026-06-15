import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assessments, calculateAIScores } from '../Data/assessments.jsx';
import '../styles/Assessment.css';

const Assessment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const foundAssessment = assessments[id];
      setAssessment(foundAssessment);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const submitAssessment = () => {
  try {
    console.log('Submitting assessment with answers:', answers);
    console.log('Assessment ID:', id);
    
    // Check if all questions are answered
    const totalQuestions = assessments[id]?.questions?.length || 0;
    const answeredCount = Object.keys(answers).length;
    
    console.log(`Questions: ${answeredCount}/${totalQuestions} answered`);
    
    if (answeredCount !== totalQuestions) {
      alert(`Please answer all ${totalQuestions} questions before submitting.`);
      return;
    }
    
    const results = calculateAIScores(id, answers);
    console.log('Navigation to results page with:', results);
    navigate(`/results/${id}`, { state: { results } });
    
  } catch (error) {
    console.error('Error submitting assessment:', error);
    console.error('Error details:', {
      assessmentId: id,
      answers: answers,
      assessments: Object.keys(assessments)
    });
    alert(`Error: ${error.message}. Check console for details.`);
  }
};

  if (loading) {
    return (
      <div className="assessment-loading full-page">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Loading AI-Powered Assessment</h2>
          <p>Preparing your personalized career assessment...</p>
        </div>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="assessment-error full-page">
        <div className="error-content">
          <h2>Assessment Not Found</h2>
          <p>The requested assessment could not be loaded.</p>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // added test submit code for testing the submit button

  // TEMPORARY: Test function to bypass scoring
const testSubmit = () => {
  console.log('=== TEST SUBMIT ===');
  
  // Create dummy results for testing
  const testResults = {
    science: {
      title: "Science Stream",
      description: "TEST - Your analytical thinking makes you perfect for Science.",
      percentage: 78,
      careers: ["Engineer", "Doctor", "Scientist"],
      courses: ["PCM", "PCB"],
      colleges: ["Test College 1", "Test College 2"]
    },
    commerce: {
      title: "Commerce Stream", 
      description: "TEST - Your business skills align with Commerce.",
      percentage: 65,
      careers: ["CA", "Manager", "Analyst"],
      courses: ["Commerce", "Business"],
      colleges: ["Test College 3", "Test College 4"]
    },
    arts: {
      title: "Arts Stream",
      description: "TEST - Your creativity suits Arts stream.",
      percentage: 52,
      careers: ["Teacher", "Writer", "Artist"],
      courses: ["Arts", "Humanities"],
      colleges: ["Test College 5", "Test College 6"]
    }
  };
  
  console.log('Navigating with test results:', testResults);
  navigate(`/results/${id}`, { state: { results: testResults } });
};

// test submit code ended here...

  const question = assessment.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100;
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="assessment full-page">
      <div className="assessment-container">
        {/* Header Section */}
        <div className="assessment-header">
          <div className="container">
            <div className="header-content">
              <div className="assessment-info">
                <h1 className="assessment-title">{assessment.title}</h1>
                <p className="assessment-description">{assessment.description}</p>
              </div>
              <div className="progress-stats">
                <div className="stat">
                  <div className="stat-value">{answeredQuestions}</div>
                  <div className="stat-label">Answered</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{assessment.questions.length}</div>
                  <div className="stat-label">Total</div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="progress-text">
                Question {currentQuestion + 1} of {assessment.questions.length} • {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="question-section">
          <div className="container">
            <div className="question-card">
              <div className="question-header">
                <span className="question-number">Question {currentQuestion + 1}</span>
                <span className="question-total">of {assessment.questions.length}</span>
              </div>
              
              <h2 className="question-text">{question.question}</h2>
              
              <div className="options-container">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, index)}
                    className={`option-button ${
                      answers[question.id] === index ? 'selected' : ''
                    }`}
                  >
                    <div className="option-indicator">
                      <div className="option-circle">
                        {answers[question.id] === index && (
                          <div className="option-dot"></div>
                        )}
                      </div>
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="nav-button prev-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Previous
              </button>

              {currentQuestion === assessment.questions.length - 1 ? (
                <button
                  onClick={submitAssessment}
                  disabled={Object.keys(answers).length !== assessment.questions.length}
                  className="nav-button submit-button"
                >
                  Submit Assessment
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled={answers[question.id] === undefined}
                  className="nav-button next-button"
                >
                  Next Question
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
