import React from "react";

const Landing = ({ setShowApp }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Todo App</h1>
      <p>Manage your tasks efficiently and boost your productivity.</p>
      
      <button 
        onClick={() => setShowApp(true)} 
        className="start-btn"
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;
