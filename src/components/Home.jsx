import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to React Router App</h1>
      <p>This application demonstrates various React concepts including:</p>
      <ul>
        <li><strong>React Routing</strong> - Navigation between different pages</li>
        <li><strong>Functional Components</strong> - Using React hooks (useState, useEffect)</li>
        <li><strong>Class Components</strong> - Using class-based React components</li>
        <li><strong>Props</strong> - Passing data between components</li>
        <li><strong>State Management</strong> - Managing component state</li>
      </ul>
      <p>Use the navigation menu above to explore different features and components!</p>
      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
        <h3>Sample Components Available:</h3>
        <p>Add Numbers, Calculator, Voting App, String Reverse, Factorial, and more!</p>
      </div>
    </div>
  );
};

export default Home;
