import React, { useState } from "react";
import "./howMany.css";

export default function HowManyComponent() {
  const [count, setCount] = useState(0);
  const emoji =
    count < 1
      ? "😴"
      : count > 500
      ? "😱😱😵😱"
      : count > 450
      ? "🧐"
      : count > 400
      ? "😱😱😵😱"
      : count > 350
      ? "😱😱"
      : count > 300
      ? "😱"
      : count > 250
      ? "😵"
      : count > 200
      ? "😯"
      : count > 150
      ? "😲"
      : count > 100
      ? "🤓🤪😶"
      : count > 75
      ? "🤭🤤"
      : count > 50
      ? "🙃"
      : count > 34
      ? "😐"
      : count > 24
      ? "🤨"
      : count > 19
      ? "😕"
      : count > 14
      ? "😒"
      : count > 3
      ? "ALISE + DAGNIS 😍😃😎🤓"
      : count > 1
      ? "ALISE! 😍😃😎🤩"
      : count > 0
      ? "😔"
      : "😴";
  const buttonClass =
    count > 5
      ? ""
      : count > 4
      ? "displacedButton"
      : count > 3
      ? "hiddenButton"
      : "";
  const howManyClass =
    count > 37
      ? "howMany"
      : count > 34
      ? "girls"
      : count > 31
      ? "howMany"
      : count > 26
      ? "hawaii"
      : count > 21
      ? "howMany"
      : count > 19
      ? "meitene"
      : count > 17
      ? "howMany"
      : count > 13
      ? "gru"
      : count > 9
      ? "howMany"
      : count > 7
      ? "minions"
      : "howMany";

  return (
    <div className={howManyClass}>
      <h1>How many is many?</h1>
      <button onClick={() => setCount(count + 1)} className={buttonClass}>
        Many is {count}.
      </button>
      <div className="emoji">{emoji}</div>
    </div>
  );
}
