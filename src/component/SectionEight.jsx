import React from "react";
import { useState } from "react";

const SectionEight = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const dates = [];

    // empty spaces
    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }

    // actual days
    for (let i = 1; i <= totalDays; i++) {
      dates.push(i);
    }

    return dates;
  };

  const dates = getDaysInMonth();

  return (
    <div className="w-full p-1 px-8 bg-white dark:bg-[#0B0F1A] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] text-black dark:text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
            )
          }
        >
          ◀
        </button>

        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>

        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
            )
          }
        >
          ▶
        </button>
      </div>

      {/* DAYS HEADER */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date, index) => {
          const isToday =
            date &&
            date === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div
              key={index}
              className={`h-16.5 rounded-xl flex items-start justify-start p-2
        ${date && isToday ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800" && date ? "bg-gray-200 dark:bg-gray-800" : ""}
        hover:bg-blue-200 dark:hover:bg-blue-900/20 cursor-pointer`}
            >
              <span className="text-lg font-medium">{date || ""}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionEight;
