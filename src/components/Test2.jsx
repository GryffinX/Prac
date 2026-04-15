import { useState } from "react";

export function Test2() {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      setMessage("Please enter feedback before submitting");
      return;
    }

    setMessage("Feedback submitted");
    setFeedback("");
  };

  return (
    <div className="card">
      <h3>Feedback Form</h3>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
      />

      <button onClick={handleSubmit}>Submit Feedback</button>

      {message && <p>{message}</p>}
    </div>
  );
}
