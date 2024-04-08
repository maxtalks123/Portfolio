"use client";
import { useState } from "react";
export default function RevealButton({ result }) {
  const [answer, setAnswer] = useState(false);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setAnswer(!answer);
        }}
      >
        Reveal result
      </button>
      {answer ? <p> The answer is: {result} </p> : null}
    </div>
  );
}
