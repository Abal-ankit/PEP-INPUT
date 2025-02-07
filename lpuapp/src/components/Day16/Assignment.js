import React, { useState } from 'react';

function Assignment() {
    const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 className="display-4" style={{ fontWeight: "bold" }}>
        Counter: {count}
      </h1>
      <br />
      {count >= 0 && count < 10 && (
        <p style={{ fontWeight: "bold" }}>Keep Going</p>
      )}
      {count >= 10 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Great! You have reached a high number
        </p>
      )}
      {count < 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>Negative Count</p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <button onClick={() => setCount(count + 1)} className="btn btn-success" disabled={count >= 15}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="btn btn-danger" disabled={count <= -10}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Assignment;
