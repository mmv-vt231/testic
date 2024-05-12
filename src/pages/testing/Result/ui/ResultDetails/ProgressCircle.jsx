import React from "react";
import "./circle.css";

function ProgressCircle({ percent }) {
  const offset = 534 - (534 / 100) * percent;

  return (
    <svg height="200" width="200" overflow="visible" style={{ margin: "0 auto" }}>
      <circle
        cx="100"
        cy="100"
        r="85"
        stroke="var(--chakra-colors-gray-50)"
        strokeWidth="30"
        fill="transparent"
      ></circle>
      <circle
        className="progress"
        cx="100"
        cy="100"
        r="85"
        stroke="var(--chakra-colors-primary-500)"
        strokeWidth="30"
        style={{ "--offset": offset }}
      ></circle>
      <text x="50%" y="55%" textAnchor="middle" fontWeight="bold" className="text">
        {percent}%
      </text>
    </svg>
  );
}

export default ProgressCircle;
