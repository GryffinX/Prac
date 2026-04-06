import { useState } from "react";

export function VotingApp() {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  return (
    <div className="card" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Voting App</h2>

      <div>
        <h3>Option A: {votesA}</h3>
        <button onClick={() => setVotesA(votesA + 1)}>
          Vote A
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Option B: {votesB}</h3>
        <button onClick={() => setVotesB(votesB + 1)}>
          Vote B
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>
          Winner:{" "}
          {votesA > votesB
            ? "Option A"
            : votesB > votesA
            ? "Option B"
            : "Tie"}
        </h3>
      </div>
    </div>
  );
}