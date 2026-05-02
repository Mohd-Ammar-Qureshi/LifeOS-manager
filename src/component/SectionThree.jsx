import React, { useState, useEffect } from "react";

const SectionThree = ({ activeTask }) => {
  const totalTime = 1500; // 25 min
  const [time, setTime] = useState(totalTime);
  const [running, setRunning] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  // Circle config
  const radius = 90;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const progress = time / totalTime;
  const strokeDashoffset = circumference - progress * circumference;

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);
      setCompletedCount((prev) => prev + 1);
      setTime(totalTime);
      alert("Session Completed ✅");
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-950 text-white rounded-2xl">
      {/* Task */}
      <h2 className="text-2xl mb-2">{activeTask}</h2>
      <p className="text-gray-400 mb-6">Focus Mode 🔕</p>

      {/* Circular Timer */}
      <div className="relative flex items-center justify-center mb-8">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background Circle */}
          <circle
            stroke="#1f2937"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress Circle */}
          <circle
            stroke="#22c55e"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{
              transition: "stroke-dashoffset 1s linear",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* Time Text */}
        <div className="absolute text-3xl font-bold">{formatTime()}</div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={() => setRunning(true)}
          className="bg-green-500 px-5 py-2 rounded-xl hover:scale-105 transition"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="bg-yellow-500 px-5 py-2 rounded-xl hover:scale-105 transition"
        >
          Pause
        </button>

        <button
          onClick={() => {
            setRunning(false);
            setTime(totalTime);
          }}
          className="bg-red-500 px-5 py-2 rounded-xl hover:scale-105 transition"
        >
          Reset
        </button>
      </div>

      {/* Completed */}
      <div className="mt-6 text-gray-400">Completed: [{completedCount}]</div>
    </div>
  );
};

export default SectionThree;
