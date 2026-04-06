import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About This Application</h1>
      <p>
        This React application is built to demonstrate modern web development practices 
        and key React concepts.
      </p>
      <h2>Features:</h2>
      <ul>
        <li><strong>React Router v7</strong> - Client-side routing for single-page applications</li>
        <li><strong>React Hooks</strong> - useState and other hooks for state management</li>
        <li><strong>Component Composition</strong> - Building reusable UI components</li>
        <li><strong>Interactive Components</strong> - Add Numbers, Calculator, Voting System</li>
        <li><strong>Functional & Class Components</strong> - Both component patterns supported</li>
      </ul>
      <h2>Technology Stack:</h2>
      <ul>
        <li>React 19.x</li>
        <li>React Router DOM 7.x</li>
        <li>Vite (Build tool)</li>
      </ul>
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f3e5f5", borderRadius: "5px" }}>
        <p><strong>Learn more about React:</strong> Visit <a href="https://react.dev" target="_blank" rel="noopener noreferrer">react.dev</a></p>
      </div>
    </div>
  );
};

export default About;
